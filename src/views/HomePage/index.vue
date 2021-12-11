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
          @heya-deleted="deleteHeya"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, Ref, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { Heya } from '/@/lib/pb/protobuf/rest/heyas'
import * as heyasApi from '/@/lib/apis/heyas'
import HeyaCard from './components/HeyaCard.vue'
import { useMe } from '/@/providers/me'

export default defineComponent({
  name: 'HomePage',
  components: {
    HeyaCard,
  },
  setup() {
    const { me } = useMe()

    // computed で検知されるように ref にする
    const heyasData: Ref<Heya[]> = ref([])
    const favoriteHeyas: Set<string> = reactive(new Set()) // お気に入りのヘヤの id を持つ set

    const sortKey: Ref<'更新日時順' | '作成日時順'> = ref('更新日時順')
    const sortOrder: Ref<'降順' | '昇順'> = ref('降順')
    const changeSortKey = () => {
      sortKey.value =
        sortKey.value === '更新日時順' ? '作成日時順' : '更新日時順'

      if (sortKey.value === '更新日時順') {
        heyasData.value.sort((a, b) => {
          if (!a.updatedAt || !b.updatedAt) {
            return 0
          }

          if (a.updatedAt < b.updatedAt) {
            return -1
          }
          if (a.updatedAt > b.updatedAt) {
            return 1
          }
          return 0
        })
      } else {
        heyasData.value.sort((a, b) => {
          if (!a.createdAt || !b.createdAt) {
            return 0
          }

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
      heyasData.value.reverse()
      sortOrder.value = sortOrder.value === '降順' ? '昇順' : '降順'
    }

    const displayHeyasFlag: Ref<
      'all' | 'isActive' | 'favorite' | 'owner' | 'recent'
    > = ref('all')

    const searchText = ref('')

    // 実際に表示するデータ
    const displayHeyasData = computed(() => {
      if (searchText.value.trim().length > 0) {
        return heyasData.value.filter((heya) =>
          searchText.value
            .split(/\s+/i)
            .filter((str) => str.length > 0)
            .some((str) => {
              if (!heya.title) {
                return false
              }
              return heya.title.indexOf(str) >= 0
            })
        )
      }

      if (displayHeyasFlag.value === 'favorite') {
        return heyasData.value.filter((heya) => {
          if (!heya.id) {
            return false
          }

          return favoriteHeyas.has(heya.id)
        })
      } else if (displayHeyasFlag.value === 'owner') {
        return heyasData.value.filter((heya) => heya.creatorId === me.id)
      }

      return heyasData.value
    })

    const changeStar = (isStared: boolean, heyaId: string) => {
      if (isStared) {
        // TODO: お気に入り追加の api 叩く
        favoriteHeyas.add(heyaId)
        localStorage.setItem('HiQidas', Array.from(favoriteHeyas).join(','))
        console.log(Array.from(favoriteHeyas).join(','))
      } else {
        // TODO: お気に入り削除の api 叩く
        favoriteHeyas.delete(heyaId)
        localStorage.setItem('HiQidas', Array.from(favoriteHeyas).join(','))
      }
    }

    const deleteHeya = async (heyaId: string) => {
      try {
        await heyasApi.deleteHeya(heyaId)
        heyasData.value = heyasData.value.filter((heya) => heya.id !== heyaId)
        favoriteHeyas.delete(heyaId)
      } catch (error) {
        ElMessage({
          message: `エラーが発生しました\n${error}`,
          type: 'error',
          customClass: 'home-page-error-message',
        })
        console.log(error)
      }
    }

    const router = useRouter()
    const createNewHeya = async () => {
      try {
        const newHeya = await heyasApi.createHeya('新しいヘヤ', '')
        router.push({
          name: 'HeyaPage',
          params: { id: newHeya.heya?.id },
        })
      } catch (error) {
        ElMessage({
          message: `エラーが発生しました\n${error}`,
          type: 'error',
          customClass: 'home-page-error-message',
        })
        console.log(error)
      }
    }

    const setHeyasData = async () => {
      try {
        const res = await heyasApi.getHeyas()

        if (!res.heyas || !res.heyas.heyas) {
          ElMessage({
            message: 'ヘヤの情報の取得に失敗しました',
            type: 'error',
          })
          return
        }

        heyasData.value = res.heyas.heyas
      } catch (error) {
        ElMessage({
          message: `エラーが発生しました\n${error}`,
          type: 'error',
          customClass: 'home-page-error-message',
        })
        console.log(error)
      }
    }

    // TODO: お気に入り管理をサーバーが実装したらコメントアウト外す
    /* const setFavoriteHeyasId = async () => {
      try {
        const res = await usersApi.getFavoriteHeyasId()
        favoriteHeyas.value = new Set(res.favoriteHeyaId)
      } catch (error) {
        ElMessage({
          message: `エラーが発生しました\n${error}`,
          type: 'error',
          customClass: 'home-page-error-message',
        })
        console.log(error)
      }
    } */

    onMounted(async () => {
      const localData = localStorage.getItem('HiQidas')
      if (localData) {
        const favs = localData.split(',')
        favs.forEach((id) => favoriteHeyas.add(id))
      }

      await setHeyasData()
      // await setFavoriteHeyasId()
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
      deleteHeya,
      createNewHeya,
    }
  },
})
</script>

<style lang="scss">
.heya-search-input {
  .el-input__inner {
    border-radius: 50px;
  }
}
</style>

<style lang="scss">
.home-page-error-message {
  p.el-message__content {
    white-space: pre-line;
  }
}
</style>

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
