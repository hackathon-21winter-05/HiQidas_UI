<template>
  <div class="hiqidashi-input">
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
import { defineComponent, PropType, ref } from 'vue'
import { HiqidashiTree } from '/@/lib/hiqidashiTree'
import { getRandomColor } from '/@/lib/utils'
import { useHiqidashiStore } from '/@/providers/hiqidashi'

export default defineComponent({
  name: 'HiQidashiInput',
  props: {
    createNewHiqidashi: {
      type: Function as PropType<
        (parentId: string, tree: HiqidashiTree) => void
      >,
      required: true,
    },
    placeHolder: {
      type: String,
      default: 'ヒキダシの名前を入力',
    },
  },
  setup(props) {
    const { hiqidashiStore: store } = useHiqidashiStore()

    const input = ref('')

    const inputFinish = () => {
      props.createNewHiqidashi(store.addingChildId, {
        children: [],
        id: Math.random().toString(32).substring(2),
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

    return { input, inputFinish, inputAbort, setRef }
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
