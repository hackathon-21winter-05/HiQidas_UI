<template>
  <div class="navbar-main"></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'Navbar',
})
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
.navbar-main {
  background-color: pink;
}
</style>
