<template>
  <div class="home">
    <div class="sidebar">
      <h1 class="title">HiQidas</h1>
      <el-input
        v-model="searchText"
        placeholder="名前で検索"
        class="heya-search-input"
      >
        <template #suffix>
          <el-icon class="el-input__icon">
            <span class="material-icons"> search </span>
          </el-icon>
        </template>
      </el-input>
    </div>
    <div class="main">
      <heya-card :heya-data="heyaData" :is-stared="isStared" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import HeyaCard from './components/HeyaCard.vue'
export default defineComponent({
  name: 'HomePage',
  components: {
    HeyaCard,
  },
  setup() {
    const heyaData = reactive({
      title: 'タイトル',
      creatorName: 'hoge',
      createdAt: '2022/01/01',
      updatedAt: '2022/02/02',
    })
    const isStared = ref(true)
    return { heyaData, isStared }
  },
})
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 220px 1fr;

  .sidebar {
    grid-column: 1;
    grid-row: 1;
    background-color: #c87b7b;

    .heya-search-input {
      width: 90%;
    }
  }

  .main {
    overflow: auto;
    grid-column: 2;
    grid-row: 1;
  }
}
</style>
