<template>
  <div class="navbar-main"></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'Navbar',
})
export default class extends Vue {}
</script>

<style scoped>
.navbar-main {
  background-color: pink;
}
</style>
