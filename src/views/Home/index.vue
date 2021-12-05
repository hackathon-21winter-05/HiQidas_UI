<template>
  <div class="home">
    <div class="sidebar">
      <h1 class="title">HiQidas</h1>
    </div>
    <div class="main">
      <hello-world msg="Welcome" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '/@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
})
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 194px 1fr;

  .sidebar {
    grid-column: 1;
    grid-row: 1;
    background-color: #e9b9d0;

    .title {
      color: #2087ff;
    }
  }

  .main {
    overflow: auto;
    grid-column: 2;
    grid-row: 1;
  }
}
</style>
