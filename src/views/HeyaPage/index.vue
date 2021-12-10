<template>
  <div class="heya">
    <div class="navbar">
      <router-link to="/" class="title"><h1>HiQidas</h1></router-link>
      <span class="heya-name">Heya Name</span>
    </div>
    <div class="heya-main">
      <div class="heya-container">
        <delete-dialog />
        <hi-qidashi-input
          v-if="store.hiqidashiTree.id === ''"
          :create-new-hiqidashi="createFirstHiqidashi"
          place-holder="ヘヤの名前を入力"
        />
        <hi-qidashi-tree
          v-else
          :tree="store.hiqidashiTree"
          :create-new-hiqidashi="createNewHiqidashi"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HiQidashiTree from './components/HiQidashiTree.vue'
import HiQidashiInput from './components/HiQidashiInput.vue'
import { useHeyaStore } from '/@/providers/heya'
import DeleteDialog from './components/DeleteDialog.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'HeyaPage',
  components: {
    HiQidashiTree,
    HiQidashiInput,
    DeleteDialog,
  },
  setup() {
    const {
      heyaStore: store,
      connectHeya,
      createNewHiqidashi,
      createFirstHiqidashi,
    } = useHeyaStore()
    const route = useRoute()
    const heyaId = route.params.id.toLocaleString()
    connectHeya(heyaId)

    return { store, createNewHiqidashi, createFirstHiqidashi }
  },
})
</script>

<style lang="scss" scoped>
.heya {
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-rows: 60px 1fr;

  .navbar {
    display: inline-flex;
    align-items: center;
    grid-row: 1;
    background-color: #c87b7b;

    .title {
      text-decoration: none;
      float: left;
      margin-left: 10px;
    }

    .heya-name {
      font-size: 24px;
      color: #ffffff;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .heya-main {
    overflow: auto;
    grid-row: 2;
  }
  .heya-container {
    padding: 50%;
    display: inline-block;
  }
}
</style>
