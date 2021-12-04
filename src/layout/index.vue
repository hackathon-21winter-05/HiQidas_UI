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
  overflow: hidden;
  display: grid;
  grid-template-columns: 180px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    'sidebar navbar'
    'sidebar main';
}

.navbar {
  grid-area: navbar;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
}

.sidebar {
  height: 100%;
  grid-area: sidebar;
}

.main {
  overflow: auto;
  height: 100%;
  grid-area: main;
}
</style>
