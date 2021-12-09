<template>
  <div class="tree-container">
    <div class="hiqidashi-content">
      <hi-qidashi :hiqidashi="tree" />
      <div class="add-button" @click="createChild" />
    </div>
    <div>
      <hi-qidashi-tree
        v-for="child in tree.children"
        :key="child.id"
        :tree="child"
        :create-new-hiqidashi="createNewHiqidashi"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
import { HiqidashiTree } from '/@/lib/hiqidashiTree'
import HiQidashi from './HiQidashi.vue'

export default defineComponent({
  name: 'HiQidashiTree',
  components: {
    HiQidashi,
  },
  props: {
    tree: {
      type: Object as PropType<HiqidashiTree>,
      required: true,
    },
    createNewHiqidashi: {
      type: Function as PropType<
        (parentId: string, tree: HiqidashiTree) => void
      >,
      required: true,
    },
  },
  setup(props) {
    const createChild = () => {
      props.createNewHiqidashi(
        props.tree.id,
        reactive({
          children: [],
          id: Math.random().toString(32).substring(2),
          title: 'title',
          description: '',
        })
      )
    }

    return { ...props, createChild }
  },
})
</script>

<style lang="scss" scoped>
.tree-container {
  display: flex;
  gap: 6rem;
}
.hiqidashi-content {
  display: flex;
  align-items: center;
}
.add-button {
  background-color: #fff;
  width: 40px;
  height: 40px;
}
</style>
