<template>
  <div class="heya-card">
    <div class="card-navbar">
      <span class="left-content">owner: @{{ heyaData.creatorName }}</span>
      <span class="material-icons right-content"> more_horiz </span>
      <span v-if="isStared" class="material-icons star-fill right-content">
        star
      </span>
      <span v-else class="material-icons right-content"> star_outline </span>
    </div>

    <h2 class="heya-data-title">{{ heyaData.title }}</h2>

    <div class="card-footer">
      <span class="left-content">作成日時</span>
      <span class="right-content">{{ heyaData.createdAt }}</span>
      <br />
      <span class="left-content">更新日時</span>
      <span class="right-content">{{ heyaData.updatedAt }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
    return { ...props }
  },
})
</script>

<style lang="scss" scoped>
.heya-card {
  width: 370px;
  padding: 16px;
  border-radius: 10px;
  background-color: #f3f3f3;
  color: #a7a7a7;

  .card-navbar {
    height: 24px;
    align-items: center;

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
