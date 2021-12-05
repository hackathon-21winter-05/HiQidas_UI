<template>
  <div class="about">
    <div class="navbar">
      <h1 class="title">HiQidas</h1>
    </div>
    <div class="main">
      <h1>This is an about page</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'About',
})
</script>

<style lang="scss" scoped>
.about {
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-rows: 60px 1fr;

  .navbar {
    display: flex;
    align-items: center;
    grid-column: 1;
    grid-row: 1;
    background-color: #e9b9d0;

    .title {
      margin-left: 5px;
      margin-right: auto;
      color: #2087ff;
    }
  }

  .main {
    overflow: auto;
    grid-column: 1;
    grid-row: 2;
  }
}
</style>
