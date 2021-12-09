<template>
  <div class="tree-container">
    <div class="hiqidashi-content">
      <hi-qidashi :hiqidashi="tree" />
      <div
        v-if="tree.children.length === 0"
        class="add-button"
        @click="createChild"
      />
      <div v-else class="arrow-container">
        <div class="diamond" />
        <div class="dotline" />
      </div>
    </div>
    <div v-if="tree.children.length !== 0" class="vertical-line" />
    <div>
      <div v-for="child in tree.children" :key="child.id" class="next-tree">
        <div class="array-body" />
        <div class="array-head" />
        <hi-qidashi-tree
          :tree="child"
          :create-new-hiqidashi="createNewHiqidashi"
        />
      </div>
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

    const color = '#e9b9d0'

    return { ...props, createChild, color }
  },
})
</script>

<style lang="scss" scoped>
.tree-container {
  display: flex;
  margin: 1px;

  .hiqidashi-content {
    display: flex;
    align-items: center;

    .add-button {
      background-color: #fff;
      width: 40px;
      height: 40px;
    }
  }
  .arrow-container {
    display: flex;
    align-items: center;

    .diamond {
      background-color: v-bind(color);
      width: 16px;
      height: 16px;
      transform: rotate(45deg);
    }

    .dotline {
      width: 24px;
      border-bottom: 4px dotted v-bind(color);
    }
  }
  .vertical-line {
    background-color: v-bind(color);
    min-width: 3px;
    min-height: 100%;
  }

  .next-tree {
    display: flex;
    align-items: center;
  }
  .array-body {
    background-color: v-bind(color);
    height: 3px;
    min-width: 20px;
  }

  .array-head {
    width: 0;
    height: 0;
    border-left: 10px solid v-bind(color);
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
  }
}
</style>
