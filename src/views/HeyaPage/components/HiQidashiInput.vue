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
import { defineComponent, onMounted, ref } from 'vue'
import { getRandomColor } from '/@/lib/utils'
import { useHeyaStore } from '/@/providers/heya'

export default defineComponent({
  name: 'HiQidashiInput',
  props: {
    first: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const {
      heyaStore: store,
      createNewHiqidashi,
      createFirstHiqidashi,
    } = useHeyaStore()

    const placeHolder = props.first
      ? 'ヘヤの名前を入力'
      : 'ヒキダシの名前を入力'

    const createFunc = props.first ? createFirstHiqidashi : createNewHiqidashi

    const input = ref('')

    const inputFinish = () => {
      createFunc(store.addingChildId, {
        children: [],
        id: Math.random().toString(32).substring(2),
        parentId: store.addingChildId,
        title: input.value,
        description: '',
        colorId: getRandomColor(),
      })

      store.addingChildId = ''
    }

    const inputAbort = () => {
      store.addingChildId = ''
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
  width: 250px;
  background-color: #ffffff;
  border-radius: 6px;
  transition: 0.3s height ease-in-out;
  margin: 8px 6px;
  display: flex;
  align-items: center;
}
</style>
