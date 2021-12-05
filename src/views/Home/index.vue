<template>
  <div class="home">
    <div class="sidebar">
      <h1 class="title">HiQidas</h1>
      <el-input v-model="searchText" placeholder="名前で検索">
        <template #suffix>
          <el-icon class="el-input__icon">
            <span class="material-icons"> search </span>
          </el-icon>
        </template>
      </el-input>
    </div>
    <div class="main">
      <hello-world msg="Welcome" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HelloWorld from '/@/components/HelloWorld.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {
    return { searchText: ref('') }
  },
})
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 194px 1fr;

  .sidebar {
    grid-column: 1;
    grid-row: 1;
    background-color: #e9b9d0;
  }

  .main {
    overflow: auto;
    grid-column: 2;
    grid-row: 1;
  }
}
</style>
