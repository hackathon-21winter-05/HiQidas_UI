<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { provideMe } from '/@/providers/me'

export default defineComponent({
  setup() {
    provideMe()
  },
})
</script>
