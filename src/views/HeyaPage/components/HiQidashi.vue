<template>
  <div class="hiqidashi" :class="{ 'is-expanded': isExpanded }">
    <div class="top-menu">
      <span
        class="material-icons left-button"
        @click="isExpanded = !isExpanded"
      >
        {{ isExpanded ? 'expand_less' : 'expand_more' }}
      </span>
      <h3 class="hiqidashi-title">{{ hiqidashi.title }}</h3>
      <span class="material-icons right-button"> more_horiz </span>
      <!-- TODO: クリックでメニューが開く -->
    </div>
    <div v-show="isExpanded">
      <hi-qidashi-editor :description="hiqidashi.description" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HiQidashiEditor from '/@/components/HiQidashiEditor/index.vue'

export default defineComponent({
  name: 'HiQidashi',
  components: {
    HiQidashiEditor,
  },
  props: {
    hiqidashi: {
      type: Object,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const isExpanded = ref(false)

    return { ...props, isExpanded }
  },
})
</script>

<style lang="scss" scoped>
.hiqidashi {
  display: block;
  height: 50px;
  width: 300px;
  background-color: #ffffff;
  border: medium solid v-bind(color);
  border-radius: 6px;
  transition: 0.3s height ease-in-out;
  margin: 8px 6px;

  &.is-expanded {
    height: auto;
    border: medium solid v-bind(color);
  }

  &:focus-within {
    box-shadow: 0px 2px 4px;
  }

  .top-menu {
    width: 300px;
    height: 50px;
    padding: 0 10px;
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    .hiqidashi-title {
      width: 232px;
      text-align: left;
      font-weight: 400;
    }

    .left-button {
      float: left;
    }

    .right-button {
      float: right;
    }
  }
}
</style>
