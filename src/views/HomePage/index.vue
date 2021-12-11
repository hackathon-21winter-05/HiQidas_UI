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

      <button class="sidebar-toggle-button" @click="changeSortKey">
        {{ sortKey }}
      </button>
      <button class="sidebar-toggle-button" @click="changeSortOrder">
        {{ sortOrder }}
      </button>

      <div class="sidebar-text-button" @click="displayHeyasFlag = 'all'">
        すべてのヘヤ
      </div>
      <div class="sidebar-text-button" @click="displayHeyasFlag = 'isActive'">
        アクティブなヘヤ
      </div>
      <div class="sidebar-text-button" @click="displayHeyasFlag = 'favorite'">
        お気に入りのヘヤ
      </div>
      <div class="sidebar-text-button" @click="displayHeyasFlag = 'owner'">
        管理人のヘヤ
      </div>
      <div class="sidebar-text-button" @click="displayHeyasFlag = 'recent'">
        最近訪れたヘヤ
      </div>
    </div>

    <div class="home-main">
      <div class="heya-cards">
        <el-card shadow="never" class="create-new-heya" @click="createNewHeya">
          <span class="material-icons add-icon"> add </span>
          <div class="add-text">新しいヘヤを作成する</div>
        </el-card>
        <heya-card
          v-for="heyaData in displayHeyasData"
          :key="heyaData.id"
          :heya-data="heyaData"
          :is-stared="favoriteHeyas.has(heyaData.id)"
          @star-changed="changeStar"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, Ref, ref } from 'vue'
import { users } from '/@/lib/apis/pb/rest/users'
import { useMe } from '/@/providers/me'
import HeyaCard from './components/HeyaCard.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    HeyaCard,
  },
  setup() {
    let userMe: users.User | null = null

    // TODO: api 叩いて取得する・表示する分フィルターかける 表示分は getter にするのが良さそう？
    const heyasData = [
      {
        id: 'abcs',
        title: 'タイトル長いよながい長いながいTitle',
        creatorId: 'nananananananananaganaganaganaga',
        creatorName: 'nananananananananaganaganaganaga',
        createdAt: '2022/01/02',
        updatedAt: '2022/02/02',
      },
      {
        id: 'uajs',
        title: 'タイトル2',
        creatorId: 'hoge2',
        creatorName: 'hoge2',
        createdAt: '2022/01/01',
        updatedAt: '2022/02/02',
      },
      {
        id: 'uajass',
        title: 'タイトル3',
        creatorId: 'hoge3',
        creatorName: 'hoge3',
        createdAt: '2022/01/01',
        updatedAt: '2022/02/02',
      },
      {
        id: 'uajsddk',
        title: 'タイトル5',
        creatorId: 'hoge5',
        creatorName: 'hoge5',
        createdAt: '2022/01/03',
        updatedAt: '2022/01/03',
      },
    ]
    const favoriteHeyas = ref(new Set(['uajass', 'uajs'])) // お気に入りのヘヤの id を持つ set

    const sortKey: Ref<'更新日時順' | '作成日時順'> = ref('更新日時順')
    const sortOrder: Ref<'降順' | '昇順'> = ref('降順')
    const changeSortKey = () => {
      sortKey.value =
        sortKey.value === '更新日時順' ? '作成日時順' : '更新日時順'

      if (sortKey.value === '更新日時順') {
        heyasData.sort((a, b) => {
          if (a.updatedAt < b.updatedAt) {
            return -1
          }
          if (a.updatedAt > b.updatedAt) {
            return 1
          }
          return 0
        })
      } else {
        heyasData.sort((a, b) => {
          if (a.createdAt < b.createdAt) {
            return -1
          }
          if (a.createdAt > b.createdAt) {
            return 1
          }
          return 0
        })
      }
    }
    const changeSortOrder = () => {
      heyasData.reverse()
      sortOrder.value = sortOrder.value === '降順' ? '昇順' : '降順'
    }

    const displayHeyasFlag: Ref<
      'all' | 'isActive' | 'favorite' | 'owner' | 'recent'
    > = ref('all')

    const searchText = ref('')

    // 実際に表示するデータ
    const displayHeyasData = computed(() => {
      if (searchText.value.trim().length > 0) {
        return heyasData.filter((heya) =>
          searchText.value
            .split(/\s+/i)
            .filter((str) => str.length > 0)
            .some((str) => heya.title.indexOf(str) >= 0)
        )
      }

      if (displayHeyasFlag.value === 'favorite') {
        return heyasData.filter((heya) => favoriteHeyas.value.has(heya.id))
      } else if (displayHeyasFlag.value === 'owner') {
        return heyasData.filter((heya) => heya.creatorId === userMe?.id)
      }

      return heyasData
    })

    const changeStar = (isStared: boolean, heyaId: string) => {
      if (isStared) {
        favoriteHeyas.value.add(heyaId)
        console.log(heyaId, ' stared!', favoriteHeyas.value)
        // TODO: お気に入り追加の api 叩く
      } else {
        favoriteHeyas.value.delete(heyaId)
        console.log(heyaId, ' unstared!', favoriteHeyas.value)
        // TODO: お気に入り削除の api 叩く
      }
    }

    const createNewHeya = () => {
      // TODO: 新しいヘヤ作成
      console.log('create')
    }

    onMounted(async () => {
      const res = await useMe()
      userMe = res.me
    })

    return {
      displayHeyasData,
      favoriteHeyas,
      searchText,
      sortKey,
      sortOrder,
      displayHeyasFlag,
      changeSortKey,
      changeSortOrder,
      changeStar,
      createNewHeya,
    }
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

    .sidebar-toggle-button {
      border: none;
      border-radius: 10px;
      background-color: #977b85;
      color: #ffffff;
      font-size: 12px;
      padding: 2px 20px;
      margin: 10px;
      cursor: pointer;
    }

    .sidebar-text-button {
      width: 180px;
      padding: 0 10px;
      margin: 0 auto;
      border-bottom: thin solid #ffffff;
      text-align: left;
      font-size: 12px;
      line-height: 3rem;
      color: #ffffff;
      cursor: pointer;
    }
  }

  .home-main {
    grid-column: 2;
    grid-row: 1;
    overflow: auto;
    text-align: center;
    padding: 10px 0;

    .heya-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, 410px);
      justify-content: center;

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
        cursor: pointer;

        .add-icon {
          font-size: 48px;
        }
      }
    }
  }
}
</style>
