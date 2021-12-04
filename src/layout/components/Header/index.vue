<template>
  <div class="header-main">
    <router-link to="/"> HiQidas </router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'Header',
})
export default class Home extends Vue {}
</script>

<style scoped>
.header-main {
  background-color: pink;
}
</style>
