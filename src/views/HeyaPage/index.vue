<template>
  <div class="heya">
    <div class="navbar">
      <router-link to="/" class="title"><h1>HiQidas</h1></router-link>
      <span class="heya-name">Heya Name</span>
    </div>
    <div class="main">
      <hi-qidashi-tree
        :tree="hiqidashiTree"
        :create-new-hiqidashi="createNewHiqidashi"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import HiQidashiTree from './components/HiQidashiTree.vue'
import { hiqidashi } from '/@/lib/apis/pb/ws/hiqidashi'
import { constructHiqidashiTree, HiqidashiTree } from '/@/lib/hiqidashiTree'
import { getRandomColor } from '/@/lib/utils'

export default defineComponent({
  name: 'HeyaPage',
  components: {
    HiQidashiTree,
  },
  setup() {
    const hiqidashis = [
      new hiqidashi.Hiqidashi({
        id: '1',
        parentId: null,
        title: 'title',
        description: 'description',
        colorId: getRandomColor(),
      }),
      new hiqidashi.Hiqidashi({
        id: '2',
        parentId: '1',
        title: 'title',
        description: 'description',
        colorId: getRandomColor(),
      }),
      new hiqidashi.Hiqidashi({
        id: '3',
        parentId: '1',
        title: 'title',
        description: 'description',
        colorId: getRandomColor(),
      }),
      new hiqidashi.Hiqidashi({
        id: '4',
        parentId: '2',
        title: 'title',
        description: 'description',
        colorId: getRandomColor(),
      }),
      new hiqidashi.Hiqidashi({
        id: '5',
        parentId: '2',
        title: 'title',
        description: 'description',
        colorId: getRandomColor(),
      }),
    ]

    const hiqidashiTree = reactive(constructHiqidashiTree(hiqidashis))

    const hiqidashiMap = new Map<string, HiqidashiTree>()
    const setHiqidashiMap = (tree: HiqidashiTree) => {
      hiqidashiMap.set(tree.id, tree)
      tree.children.forEach(setHiqidashiMap)
    }

    setHiqidashiMap(hiqidashiTree)

    const createNewHiqidashi = (parentId: string, hiqidashi: HiqidashiTree) => {
      const parent = hiqidashiMap.get(parentId)

      if (!parent) {
        throw new Error(`parentId ${parentId} not found.`)
      }

      parent.children.push(hiqidashi)
      hiqidashiMap.set(hiqidashi.id, hiqidashi)
    }

    return { hiqidashiTree, createNewHiqidashi }
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

  .main {
    overflow: auto;
    grid-row: 2;
  }
}
</style>
