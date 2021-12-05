<template>
  <div class="sidebar-main">
    <span class="links">
      <router-link to="/"> home </router-link>
      <router-link to="/about"> about </router-link>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Sidebar',
})
</script>

<style lang="scss" scoped>
.sidebar-main {
  background-color: powderblue;

  .links {
    display: flex;
    flex-direction: column;
  }
}
</style>
