<template>
  <el-card shadow="never" class="heya-card">
    <el-card v-show="showDialog" class="heya-dialog">
      <div class="dialog-text" @click="deleteHeya">このヘヤを削除</div>
    </el-card>

    <div class="card-navbar">
      <span class="left-content owner-data">
        owner: @{{ heyaData.creatorId[0] }}
      </span>
      <span
        class="material-icons navbar-button right-content"
        @click="showDialog = true"
      >
        more_horiz
      </span>
      <span
        v-if="isStaredRef"
        class="material-icons star-fill navbar-button right-content"
        @click="emitStarChanged"
      >
        star
      </span>
      <span
        v-else
        class="material-icons navbar-button right-content"
        @click="emitStarChanged"
      >
        star_outline
      </span>
    </div>

    <span class="link-area" @click="goToHeyaPage(heyaData.id)">
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
import { defineComponent, ref, PropType } from 'vue'
import { useRouter } from 'vue-router'
import { Heya } from '/@/lib/pb/protobuf/rest/heyas'

export default defineComponent({
  name: 'HeyaCard',
  props: {
    heyaData: {
      type: Object as PropType<Heya>,
      required: true,
    },
    isStared: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['star-changed', 'heya-deleted'],
  setup(props, context) {
    const isStaredRef = ref(props.isStared) // ref にしないと値変更時に再描画されない

    const showDialog = ref(false)
    document.addEventListener('click', (event) => {
      if (!event || !event.target) {
        return
      }

      if (!(event.target as HTMLElement).closest('.heya-card')) {
        showDialog.value = false
      }
    })

    const router = useRouter()
    const goToHeyaPage = (heyaId: string) => {
      console.log(heyaId)
      router.push({ name: 'HeyaPage', params: { id: heyaId } })
    }

    const deleteHeya = async () => {
      if (window.confirm(`ヘヤ: "${props.heyaData.title}" を削除します。`)) {
        context.emit('heya-deleted', props.heyaData.id)
      }
    }

    const emitStarChanged = () => {
      isStaredRef.value = !isStaredRef.value
      context.emit('star-changed', !props.isStared, props.heyaData.id)
    }

    return {
      ...props,
      isStaredRef,
      showDialog,
      goToHeyaPage,
      deleteHeya,
      emitStarChanged,
    }
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
      cursor: pointer;
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

    .navbar-button {
      cursor: pointer;
    }
  }

  .link-area {
    cursor: pointer;

    .heya-data-title {
      font-size: 36px;
      display: flex;
      text-align: left;
      align-items: center;
      margin: 0;
      line-height: 1.5em;
      height: 3em;
    }

    .card-footer {
      height: 48px;
      align-items: center;
    }
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
