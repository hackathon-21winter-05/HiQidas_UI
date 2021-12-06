<template>
  <div class="heya">
    <div class="navbar">
      <router-link to="/" class="title"><h1>HiQidas</h1></router-link>
      <span class="heya-name">Heya Name</span>
    </div>
    <div class="main">
      <h1>This is a heya page</h1>
      <hi-qidashi :hiqidashi="hiqidashiData" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HiQidashi from './components/HiQidashi.vue'

export default defineComponent({
  name: 'Heya',
  components: {
    HiQidashi,
  },
  setup() {
    const hiqidashiData = { id: 'abcd', title: 'タイトル', description: '説明' }
    return { hiqidashiData }
  },
})
</script>

<style lang="scss" scoped>
.heya {
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-rows: 60px 1fr;

  .navbar {
    display: inline-flex;
    align-items: center;
    grid-row: 1;
    background-color: #c87b7b;

    .title {
      text-decoration: none;
      float: left;
      margin-left: 10px;
    }

    .heya-name {
      font-size: 24px;
      color: #ffffff;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .main {
    overflow: auto;
    grid-row: 2;
  }
}
</style>
