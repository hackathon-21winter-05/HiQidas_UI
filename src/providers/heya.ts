import { inject, InjectionKey, provide, reactive } from 'vue'
import { HiqidashiTree } from '/@/lib/hiqidashiTree'
// import { connectWS } from '/@/lib/apis/ws'
import { hiqidashi } from '/@/lib/apis/pb/ws/ws'

export interface HeyaStore {
  heyaId: string
  hiqidashiTree: HiqidashiTree
  hiqidashiMap: Map<string, HiqidashiTree>
  addingChildId: string
  lastEditedId: string
  deleteDialogVisible: boolean
  deleteId: string
}

const heyaStoreSymbol: InjectionKey<HeyaStore> = Symbol()

const createHeyaStore = () =>
  reactive({
    heyaId: '',
    hiqidashiTree: {
      children: [],
      id: '',
      title: '',
      description: '',
      colorId: '',
    },
    hiqidashiMap: new Map(),
    addingChildId: '',
    lastEditedId: '',
    deleteDialogVisible: false,
    deleteId: '',
  })

export const provideHeyaStore = () =>
  provide(heyaStoreSymbol, createHeyaStore())

export const useHeyaStoreBase = () => {
  const heyaStore = inject(heyaStoreSymbol)
  if (!heyaStore) {
    throw new Error('useHeyaStore() called without provider.')
  }

  const resetHeya = () => {
    heyaStore.hiqidashiTree = reactive({
      children: [],
      id: '',
      title: '',
      description: '',
      colorId: '',
    })
    heyaStore.hiqidashiMap = new Map()
    heyaStore.addingChildId = ''
    heyaStore.lastEditedId = ''
    heyaStore.deleteDialogVisible = false
    heyaStore.deleteId = ''
  }

  const setHiqidashiMap = (tree: HiqidashiTree) => {
    heyaStore.hiqidashiMap.set(tree.id, tree)
    tree.children.forEach(setHiqidashiMap)
  }

  const createNewHiqidashi = (parentId: string, hiqidashi: HiqidashiTree) => {
    const parent = heyaStore.hiqidashiMap.get(parentId)

    if (!parent) {
      throw new Error(`parentId ${parentId} not found.`)
    }

    parent.children.push(reactive(hiqidashi))
    heyaStore.hiqidashiMap.set(hiqidashi.id, hiqidashi)
  }

  const createFirstHiqidashi = (parentId: string, hiqidashi: HiqidashiTree) => {
    heyaStore.hiqidashiTree.id = hiqidashi.id
    heyaStore.hiqidashiTree.title = hiqidashi.title
    heyaStore.hiqidashiTree.description = hiqidashi.description
    heyaStore.hiqidashiTree.colorId = hiqidashi.colorId

    setHiqidashiMap(heyaStore.hiqidashiTree)
  }

  return {
    heyaStore,
    resetHeya,
    createNewHiqidashi,
    createFirstHiqidashi,
  }
}

// Vue側から使う
export const useHeyaStore = () => {
  const { heyaStore, resetHeya, createNewHiqidashi, createFirstHiqidashi } =
    useHeyaStoreBase()

  const connectHeya = (heyaId: string) => {
    if (heyaStore.heyaId === heyaId) {
      return
    }
    resetHeya()

    heyaStore.heyaId = heyaId

    // connectWS(heyaId)
  }

  const createNewHiqidashiAndSend = (
    parentId: string,
    hiqidashi: HiqidashiTree
  ) => {
    createNewHiqidashi(parentId, hiqidashi)
    // WSで送信
  }

  const createFirstHiqidashiAndSend = (
    parentId: string,
    hiqidashi: HiqidashiTree
  ) => {
    createFirstHiqidashi(parentId, hiqidashi)
    // WSで送信
  }

  return {
    heyaStore,
    connectHeya,
    createNewHiqidashi: createNewHiqidashiAndSend,
    createFirstHiqidashi: createFirstHiqidashiAndSend,
  }
}

// WebSocket側から使う
export const useHeyaStoreFromWS = () => {
  const { heyaStore, createNewHiqidashi, createFirstHiqidashi } =
    useHeyaStoreBase()

  const setHiqidashi = (hiqidashi: hiqidashi.IHiqidashi) => {
    const { id, title, description, colorId, parentId } = hiqidashi
    if (
      typeof id !== 'string' ||
      typeof title !== 'string' ||
      typeof description !== 'string' ||
      typeof colorId !== 'string' ||
      typeof parentId !== 'string'
    ) {
      throw new Error('invalid hiqidashi')
    }

    const hiqidashiTree = {
      children: [],
      id,
      title,
      description,
      colorId,
    }

    if (hiqidashi.parentId === '') {
      createFirstHiqidashi('', hiqidashiTree)
    } else {
      createNewHiqidashi(parentId, hiqidashiTree)
    }
  }
  const editHiqidashi = (hiqidashi: hiqidashi.IWsEditHiqidashi) => {
    const tree = heyaStore.hiqidashiMap.get(hiqidashi.id ?? '')
    if (!tree) {
      throw new Error('invalid hiqidashi id')
    }

    tree.title = hiqidashi.title?.value ?? tree.title
    // NOTE: 多分ここでの更新はしなくなる
    tree.description = hiqidashi.description?.value ?? tree.description
    tree.colorId = hiqidashi.colorId?.value ?? tree.colorId
  }

  return {
    heyaStore,
    setHiqidashi,
    editHiqidashi,
  }
}
