<template>
  <div class="layout-container">
    <navbar class="navbar" />
    <sidebar class="sidebar" />
    <router-view class="main" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Navbar from './components/Navbar/index.vue'
import Sidebar from './components/Sidebar/index.vue'

@Options({
  name: 'Layout',
  components: {
    Navbar,
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

.navbar {
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
