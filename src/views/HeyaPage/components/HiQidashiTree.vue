<template>
  <div class="tree-container">
    <div class="hiqidashi-content">
      <hi-qidashi-input
        v-if="tree.mode === 'init' || tree.mode === 'edit'"
        :tree="tree"
      />
      <hi-qidashi v-else :hiqidashi="tree" :color="color" />
      <div v-if="tree.children.length === 0" class="no-child-container">
        <div class="small-diamond" />
        <div class="array-body" />
        <div class="array-head" />
        <div class="add-button" @click="createChild">
          <div class="plus-vertical-line" />
          <div class="plus-horizonal-line" />
        </div>
      </div>
      <div v-else class="arrow-container">
        <div ref="diamondRef" class="diamond" @click="toggleExpand" />
        <div v-if="isExpanded" class="dotline" />
        <template v-else>
          <div class="array-body" />
          <div class="array-head" />
          <div class="children-count">
            {{ tree.children.length }}
          </div>
        </template>
      </div>
    </div>
    <template v-if="tree.children.length !== 0">
      <div v-show="isExpanded" class="vertical-line" />
      <div v-show="isExpanded" class="next-trees">
        <div v-for="child in tree.children" :key="child.id" class="next-tree">
          <div class="array-body" />
          <div class="array-head" />
          <hi-qidashi-tree :tree="child" />
        </div>
        <div class="next-tree">
          <div class="array-body" />
          <div class="array-head" />
          <div class="add-button-long" @click="createChild">
            <div class="plus-vertical-line" />
            <div class="plus-horizonal-line" />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import { HiqidashiTree } from '/@/lib/hiqidashiTree'
import HiQidashiInput from './HiQidashiInput.vue'
import HiQidashi from './HiQidashi.vue'
import { useHeyaStore } from '/@/providers/heya'

export default defineComponent({
  name: 'HiQidashiTree',
  components: {
    HiQidashi,
    HiQidashiInput,
  },
  props: {
    tree: {
      type: Object as PropType<HiqidashiTree>,
      required: true,
    },
  },
  setup(props) {
    const { heyaStore: store, createNewHiqidashi } = useHeyaStore()

    const isExpanded = ref(true)

    const createChild = () => {
      createNewHiqidashi(props.tree.id)
    }

    const diamondRef = ref<HTMLElement>()

    const color = computed(() => props.tree.colorId)

    const toggleExpand = () => {
      isExpanded.value = !isExpanded.value
      if (diamondRef.value) {
        diamondRef.value.scrollIntoView({ block: 'center', inline: 'center' })
      }
    }

    return {
      ...props,
      store,
      color,
      isExpanded,
      toggleExpand,
      createChild,
      diamondRef,
    }
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
    }
    .add-button {
      position: relative;
      background-color: v-bind(color);
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
  }
  .small-diamond {
    background-color: v-bind(color);
    width: 9px;
    height: 9px;
    transform: rotate(45deg);
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
  .plus-vertical-line {
    position: absolute;
    width: 4px;
    height: 18px;
    inset: 0;
    margin: auto;
    background-color: white;
  }

  .plus-horizonal-line {
    position: absolute;
    width: 18px;
    height: 4px;
    inset: 0;
    margin: auto;
    background-color: white;
  }

  .add-button-long {
    position: relative;
    background-color: v-bind(color);
    height: 50px;
    width: 300px;
    border: medium solid v-bind(color);
    border-radius: 10px;
    margin: 8px 6px;
  }
  .next-trees {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;

    .next-tree {
      display: flex;
      align-items: center;
    }
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
