<template>
  <div ref="elRef" class="hiqidashi-input">
    <el-input
      :ref="setRef"
      v-model="input"
      :placeholder="placeHolder"
      @keyup.enter="inputFinish"
      @keyup.esc="inputAbort"
    />
  </div>
</template>

<script lang="ts">
import { ElInput } from 'element-plus'
import { defineComponent, onMounted, PropType, ref } from 'vue'
import { HiqidashiTree } from '/@/lib/hiqidashiTree'
import { getRandomColor } from '/@/lib/utils'
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
    const { deleteInputTitleId, changeHiqidashi } = useHeyaStore()

    const placeHolder = props.first
      ? 'ヘヤの名前を入力'
      : 'ヒキダシの名前を入力'

    const input = ref('')

    const inputFinish = () => {
      console.log(input.value)
      changeHiqidashi(props.tree.id, {
        title: input.value,
        colorId: getRandomColor(),
      })

      deleteInputTitleId(props.tree.id)
    }

    const inputAbort = () => {
      deleteInputTitleId(props.tree.id)
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

    return { input, inputFinish, inputAbort, setRef, elRef, placeHolder }
  },
})
</script>

<style lang="scss" scoped>
.hiqidashi-input {
  height: 50px;
  width: 306px;
  background-color: #ffffff;
  border-radius: 6px;
  transition: 0.3s height ease-in-out;
  margin: 8px 6px;
  display: flex;
  align-items: center;
}
</style>
