<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { provideHeyaStore } from '/@/providers/heya'
import { provideMe } from '/@/providers/me'

export default defineComponent({
  setup() {
    provideMe()
    provideHeyaStore()
  },
})
</script>
