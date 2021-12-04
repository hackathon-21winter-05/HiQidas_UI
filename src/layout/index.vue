<template>
  <div class="layout-container">
    <header class="header" />
    <sidebar class="sidebar" />
    <router-view class="main" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Header from './components/Header/index.vue'
import Sidebar from './components/Sidebar/index.vue'

@Options({
  name: 'Layout',
  components: {
    Header,
    Sidebar,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
.layout-container {
  height: 100%;
  display: grid;
  grid-template-columns: 180px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    'sidebar header'
    'sidebar main';
}

.header {
  grid-area: header;
}

.sidebar {
  height: 100%;
  grid-area: sidebar;
}

.main {
  height: 100%;
  grid-area: main;
}
</style>
