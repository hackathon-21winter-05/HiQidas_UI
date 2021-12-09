<template>
  <div class="tree-container">
    <div class="hiqidashi-content">
      <hi-qidashi :hiqidashi="tree" />
      <div v-if="tree.children.length === 0" class="no-child-container">
        <div class="diamond" />
        <div class="array-body" />
        <div class="array-head" />
        <div class="add-button" @click="createChild">
          <div class="plus-vertical-line" />
          <div class="plus-horizonal-line" />
        </div>
      </div>
      <div v-else class="arrow-container">
        <div class="diamond" @click="toggleExpand" />
        <div v-show="isExpanded" class="dotline" />
        <div v-show="!isExpanded" class="array-body" />
        <div v-show="!isExpanded" class="array-head" />
        <div v-show="!isExpanded" class="children-count">
          {{ tree.children.length }}
        </div>
      </div>
    </div>
    <div
      v-if="tree.children.length !== 0"
      v-show="isExpanded"
      class="vertical-line"
    />
    <div
      v-if="tree.children.length !== 0"
      v-show="isExpanded"
      class="next-trees"
    >
      <div v-for="child in tree.children" :key="child.id" class="next-tree">
        <div class="array-body" />
        <div class="array-head" />
        <hi-qidashi-tree
          :tree="child"
          :create-new-hiqidashi="createNewHiqidashi"
        />
      </div>
      <div class="next-tree">
        <div class="array-body" />
        <div class="array-head" />
        <div class="add-button-long" @click="createChild" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, ref } from 'vue'
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
    const isExpanded = ref(true)

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

    const toggleExpand = () => (isExpanded.value = !isExpanded.value)

    const color = '#e9b9d0'

    return { ...props, createChild, color, isExpanded, toggleExpand }
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
    .no-child-container {
      display: flex;
      align-items: center;
      justify-content: center;
      .diamond {
        background-color: v-bind(color);
        width: 9px;
        height: 9px;
        transform: rotate(45deg);
      }
    }
    .add-button {
      position: relative;
      background-color: v-bind(color);
      width: 36px;
      height: 36px;
      border-radius: 50%;

      .plus-vertical-line {
        position: absolute;
        width: 10%;
        height: 50%;
        inset: 0;
        margin: auto;
        background-color: white;
      }

      .plus-horizonal-line {
        position: absolute;
        width: 50%;
        height: 10%;
        inset: 0;
        margin: auto;
        background-color: white;
      }
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

    .children-count {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: 4px solid v-bind(color);
      background-color: white;
      text-align: center;
      line-height: 28px;
      font-size: 20px;
      color: v-bind(color);
    }
  }
  .vertical-line {
    background-color: v-bind(color);
    min-width: 3px;
    min-height: 100%;
  }

  .add-button-long {
    background-color: v-bind(color);
    height: 50px;
    width: 300px;
    border: medium solid #e9b9d0;
    border-radius: 10px;
    margin: 8px 6px;
  }
  .next-trees {
    display: flex;
    flex-direction: column-reverse;

    .next-tree {
      display: flex;
      align-items: center;
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
  }
}
</style>
