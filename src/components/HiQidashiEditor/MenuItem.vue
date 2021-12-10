<template>
  <button
    class="menu-item"
    :class="{ 'is-active': isActive ? isActive() : null }"
    :title="title"
    @click="action"
  >
    <span class="material-icons"> {{ icon }} </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    action: {
      type: Function as PropType<(e: MouseEvent) => void>,
      required: true,
    },
    isActive: {
      type: Function,
      default: null,
    },
  },
  setup(props) {
    return { ...props }
  },
})
</script>

<style lang="scss" scoped>
.menu-item {
  width: 1.75rem;
  height: 1.75rem;
  color: #0d0d0d;
  border: none;
  background-color: transparent;
  border-radius: 0.4rem;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &.is-active,
  &:hover {
    color: #fff;
    background-color: #0d0d0d;
  }
}
</style>
