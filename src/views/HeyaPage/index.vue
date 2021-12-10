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
          v-if="hiqidashiTree.id === ''"
          :create-new-hiqidashi="createFirstHiqidashi"
          place-holder="ヘヤの名前を入力"
        />
        <hi-qidashi-tree
          v-else
          :tree="hiqidashiTree"
          :create-new-hiqidashi="createNewHiqidashi"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import HiQidashiTree from './components/HiQidashiTree.vue'
import HiQidashiInput from './components/HiQidashiInput.vue'
import { HiqidashiTree } from '/@/lib/hiqidashiTree'
import { provideHiqidashiStore } from '/@/providers/hiqidashi'
import DeleteDialog from './components/DeleteDialog.vue'

export default defineComponent({
  name: 'HeyaPage',
  components: {
    HiQidashiTree,
    HiQidashiInput,
    DeleteDialog,
  },
  setup() {
    provideHiqidashiStore()

    const hiqidashiTree = reactive({
      children: [],
      id: '',
      title: '',
      description: '',
      colorId: '',
    })

    const hiqidashiMap = new Map<string, HiqidashiTree>()
    const setHiqidashiMap = (tree: HiqidashiTree) => {
      hiqidashiMap.set(tree.id, tree)
      tree.children.forEach(setHiqidashiMap)
    }

    if (hiqidashiTree.id !== '') {
      setHiqidashiMap(hiqidashiTree)
    }

    const createNewHiqidashi = (parentId: string, hiqidashi: HiqidashiTree) => {
      const parent = hiqidashiMap.get(parentId)

      if (!parent) {
        throw new Error(`parentId ${parentId} not found.`)
      }

      parent.children.push(reactive(hiqidashi))
      hiqidashiMap.set(hiqidashi.id, hiqidashi)
    }

    const createFirstHiqidashi = (
      parentId: string,
      hiqidashi: HiqidashiTree
    ) => {
      hiqidashiTree.id = hiqidashi.id
      hiqidashiTree.title = hiqidashi.title
      hiqidashiTree.description = hiqidashi.description
      hiqidashiTree.colorId = hiqidashi.colorId

      setHiqidashiMap(hiqidashiTree)
    }

    return { hiqidashiTree, createNewHiqidashi, createFirstHiqidashi }
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
