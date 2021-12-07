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
    <div class="home-main">
      <el-card shadow="never" class="create-new-heya" @click="createNewHeya">
        <span class="material-icons add-icon"> add </span>
        <div class="add-text">新しいヘヤを作成する</div>
      </el-card>
      <heya-card
        v-for="heyaData in heyasData"
        :key="heyaData.id"
        :heya-data="heyaData"
        :is-stared="isStared"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HeyaCard from './components/HeyaCard.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    HeyaCard,
  },
  setup() {
    const searchText = ref('')

    // TODO: api 叩いて取得する・表示する分フィルターかける
    const heyasData = ref([
      {
        id: 'abcs',
        title: 'タイトル長いよながい長いながいTitle',
        creatorName: 'hoge',
        createdAt: '2022/01/01',
        updatedAt: '2022/02/02',
      },
      {
        id: 'uajs',
        title: 'タイトル2',
        creatorName: 'hoge2',
        createdAt: '2022/01/01',
        updatedAt: '2022/02/02',
      },
      {
        id: 'uajass',
        title: 'タイトル3',
        creatorName: 'hoge3',
        createdAt: '2022/01/01',
        updatedAt: '2022/02/02',
      },
      {
        id: 'uajsddk',
        title: 'タイトル5',
        creatorName: 'hoge5',
        createdAt: '2022/01/01',
        updatedAt: '2022/02/02',
      },
    ])
    const isStared = ref(true) // TODO: 表示分フィルター時に部屋ごとに値設定

    const createNewHeya = () => {
      // TODO: api 叩いて新しいヘヤ作成
    }

    return { searchText, heyasData, isStared, createNewHeya }
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

  .home-main {
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 0;
    grid-column: 2;
    grid-row: 1;

    .create-new-heya {
      width: 370px;
      height: 220px;
      margin: 10px 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: none;
      background-color: #f3f3f3;
      color: #626262;

      .add-icon {
        font-size: 48px;
      }
    }
  }
}
</style>
