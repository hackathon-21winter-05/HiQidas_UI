<template>
  <el-card shadow="never" class="heya-card">
    <el-card v-show="showDialog" class="heya-dialog">
      <div class="dialog-text" @click="deleteHeya">このヘヤを削除</div>
      <div class="dialog-text" @click="editHeyaTitle">ヘヤの名前を変更</div>
    </el-card>

    <div class="card-navbar">
      <span class="left-content owner-data">
        owner: @{{ heyaData.creatorName }}
      </span>
      <span class="material-icons right-content" @click="showDialog = true">
        more_horiz
      </span>
      <span v-if="isStared" class="material-icons star-fill right-content">
        star
      </span>
      <span v-else class="material-icons right-content"> star_outline </span>
    </div>

    <span @click="goToHeyaPage(heyaData.id)">
      <h2 class="heya-data-title">{{ heyaData.title }}</h2>

      <div class="card-footer">
        <span class="left-content">作成日時</span>
        <span class="right-content">{{ heyaData.createdAt }}</span>
        <br />
        <span class="left-content">更新日時</span>
        <span class="right-content">{{ heyaData.updatedAt }}</span>
      </div>
    </span>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'HeyaCard',
  props: {
    heyaData: {
      type: Object,
      required: true,
    },
    isStared: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const showDialog = ref(false)
    document.addEventListener('click', (event) => {
      if (!event || !event.target) {
        return
      }

      if(!event.target.closest('.heya-dialog')) {
        showDialog.value = false
      }
    })

    const router = useRouter()
    const goToHeyaPage = (heyaId: string) => {
      console.log(heyaId)
      router.push({ name: 'HeyaPage', params: { id: heyaId } })
    }

    const deleteHeya = () => {
      if (window.confirm(`ヘヤ: "${props.heyaData.title}" を削除します。`)) {
        // TODO: ヘヤの削除
      }
    }

    const editHeyaTitle = () => {
      // TODO: ヘヤのタイトル変更
      console.log('edit')
    }

    return { ...props, showDialog, goToHeyaPage, deleteHeya, editHeyaTitle }
  },
})
</script>

<style lang="scss">
.heya-dialog {
  .el-card__body {
    padding: 10px;
  }
}
</style>

<style lang="scss" scoped>
.heya-card {
  width: 370px;
  height: 220px;
  margin: 10px 20px;
  border: none;
  background-color: #f3f3f3;
  color: #626262;
  position: relative;
  overflow: visible;

  .heya-dialog {
    position: absolute;
    z-index: 1;
    margin-left: 240px;
    width: 150px;

    .dialog-text {
      text-align: left;
    }
  }

  .card-navbar {
    height: 24px;

    .owner-data {
      position: absolute;
      text-align: left;
    }

    .star-fill {
      color: #ffe974;
    }
  }

  .heya-data-title {
    font-size: 36px;
    text-align: left;
    margin: 0;
    line-height: 1.5em;
    height: 3em;
  }

  .card-footer {
    height: 48px;
    align-items: center;
  }

  .right-content {
    display: flex;
    float: right;
  }

  .left-content {
    display: flex;
    float: left;
  }
}
</style>
