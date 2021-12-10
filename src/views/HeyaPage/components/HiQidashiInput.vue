<template>
  <div ref="elRef" class="hiqidashi-input">
    <el-input
      :ref="setRef"
      v-model="input"
      :placeholder="placeHolder"
      @keyup.enter="inputFinish"
      @keyup.esc="inputAbort"
    />
    <div class="buttons">
      <el-button size="medium" @click="inputAbort">キャンセル</el-button>
      <el-button
        size="medium"
        color="#c87b7b"
        class="button2"
        @click="inputFinish"
        >{{ tree.mode === 'init' ? '作成' : '更新する' }}</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { ElInput } from 'element-plus'
import { computed, defineComponent, onMounted, PropType, ref } from 'vue'
import { HiqidashiTree } from '/@/lib/hiqidashiTree'
import { useHeyaStore } from '/@/providers/heya'

export default defineComponent({
  name: 'HiQidashiInput',
  props: {
    tree: {
      type: Object as PropType<HiqidashiTree>,
      required: true,
    },
    first: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { changeHiqidashi, changeMode } = useHeyaStore()

    const placeHolder = props.first
      ? 'ヘヤの名前を入力'
      : 'ヒキダシの名前を入力'

    const input = ref(props.tree.title)

    const inputFinish = () => {
      changeHiqidashi(props.tree.id, {
        title: input.value,
      })

      changeMode(props.tree.id, 'normal')
    }

    const inputAbort = () => {
      changeMode(props.tree.id, 'normal')
    }

    const setRef = (el: InstanceType<typeof ElInput>) => {
      if (el) el.focus()
    }

    const elRef = ref<HTMLElement>()
    onMounted(() => {
      if (elRef.value) {
        elRef.value.scrollIntoView({ block: 'center', inline: 'center' })
      }
    })

    const color = computed(() => props.tree.colorId)

    return { input, inputFinish, inputAbort, setRef, elRef, placeHolder, color }
  },
})
</script>

<style lang="scss" scoped>
.hiqidashi-input {
  height: 100px;
  width: 250px;
  background-color: #ffffff;
  border-radius: 6px;
  border: 2px solid v-bind(color);
  transition: 0.3s height ease-in-out;
  margin: 8px 6px;
  display: flex;
  flex-flow: column;
  justify-content: center;

  .buttons {
    display: flex;
    margin: 5px 10px;
    justify-content: space-between;

    .button2 {
      color: white;
    }
  }
}
</style>
