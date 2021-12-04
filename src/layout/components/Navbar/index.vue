<template>
  <div class="navbar-main">
    <button @click="change">
      {{ showSidebar ? 'Close' : 'Open' }}
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'Navbar',
  props: ['showSidebar'],
  emits: ['update:showSidebar'],
})
export default class extends Vue {
  showSidebar!: boolean

  change(): void {
    this.showSidebar = !this.showSidebar
  }
}
</script>

<style lang="scss" scoped>
.navbar-main {
  display: flex;
  background-color: pink;
}
</style>
