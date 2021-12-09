<template>
  <div class="tree-container">
    <hi-qidashi :hiqidashi="tree" />
    <div>
      <hi-qidashi-tree
        v-for="(child, index) in tree.children"
        :key="index"
        :tree="child"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
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
  },
  setup(props) {
    return { ...props }
  },
})
</script>

<style lang="scss" scoped>
.tree-container {
  display: flex;
  gap: 6rem;
}
</style>
