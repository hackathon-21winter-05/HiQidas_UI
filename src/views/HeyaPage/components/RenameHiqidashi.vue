<template></template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { HiqidashiTree } from '/@/lib/hiqidashiTree'

export default defineComponent({
  name: 'RenameHiqidashi',
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
