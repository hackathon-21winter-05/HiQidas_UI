<template>
  <div class="layout-container">
    <navbar
      class="navbar"
      :class="{ 'hide-sidebar': !showSidebar }"
      v-model:show-sidebar="showSidebar"
    />
    <sidebar v-if="showSidebar" class="sidebar" />
    <router-view class="main" :class="{ 'hide-sidebar': !showSidebar }" />
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
export default class Home extends Vue {
  showSidebar = true
}
</script>

<style lang="scss" scoped>
.layout-container {
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 180px 1fr;
  grid-template-rows: 60px 1fr;

  .navbar {
    grid-column: 2;
    grid-row: 1;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);

    &.hide-sidebar {
      grid-column: 1 / 3;
    }
  }

  .sidebar {
    grid-column: 1;
    grid-row: 1 / 3;
  }

  .main {
    overflow: auto;
    grid-column: 2;
    grid-row: 2;

    &.hide-sidebar {
      grid-column: 1 / 3;
    }
  }
}
</style>
