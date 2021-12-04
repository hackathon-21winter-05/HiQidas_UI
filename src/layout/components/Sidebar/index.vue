<template>
  <div class="sidebar-main">
    <router-link to="/"> home </router-link>
    <router-link to="/about"> about </router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import router from '@/router/index'

@Options({
  name: 'Sidebar',
})
export default class Home extends Vue {
  routes = router
}
</script>

<style scoped>
.sidebar-main {
  height: 100%;
  background-color: powderblue;
}
</style>
