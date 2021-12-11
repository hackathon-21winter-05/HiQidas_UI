import { inject, InjectionKey, provide, reactive } from 'vue'
import { constructHiqidashiTree, HiqidashiTree } from '/@/lib/hiqidashiTree'
import { Hiqidashi, WsEditHiqidashi } from '/@/lib/pb/protobuf/ws/hiqidashi'
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  connectWS, // TODO: remove ↑
  sendCreateHiqidashiMessage,
  sendDeleteHiqidashiMessage,
  sendEditHiqidashiMessage,
} from '/@/lib/apis/ws'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useMe } from '/@/providers/me'

export interface HeyaStore {
  heyaId: string
  webSocket?: WebSocket
  hiqidashiTree: HiqidashiTree
  hiqidashiMap: Map<string, HiqidashiTree>
  lastFocusedId: string
  deleteDialogVisible: boolean
  deleteId: string
  colorPickingId: string
}

const heyaStoreSymbol: InjectionKey<HeyaStore> = Symbol()

const createHeyaStore = () => {
  // TODO: デバッグ用なのでそのうち消す
  const store: HeyaStore = reactive({
    heyaId: '',
    hiqidashiTree: {
      children: [],
      id: '',
      parentId: '',
      creatorId: '',
      title: '',
      description: '',
      colorCode: '',
      mode: 'init',
    },
    hiqidashiMap: new Map(),
    lastFocusedId: '',
    deleteDialogVisible: false,
    deleteId: '',
    colorPickingId: '',
  })
  return store
}

export const provideHeyaStore = () =>
  provide(heyaStoreSymbol, createHeyaStore())

export const useHeyaStoreBase = () => {
  const heyaStore = inject(heyaStoreSymbol)
  if (!heyaStore) {
    throw new Error('useHeyaStore() called without provider.')
  }

  const resetHeya = () => {
    heyaStore.hiqidashiTree.children = []

    heyaStore.hiqidashiTree.id = ''
    heyaStore.hiqidashiTree.parentId = ''
    heyaStore.hiqidashiTree.creatorId = ''
    heyaStore.hiqidashiTree.title = ''
    heyaStore.hiqidashiTree.description = ''
    heyaStore.hiqidashiTree.colorCode = ''
    heyaStore.hiqidashiTree.mode = 'normal'

    heyaStore.hiqidashiMap = reactive(new Map())
    heyaStore.lastFocusedId = ''
    heyaStore.deleteDialogVisible = false
    heyaStore.deleteId = ''
    heyaStore.colorPickingId = ''
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
    heyaStore.hiqidashiTree.colorCode = hiqidashi.colorCode
    heyaStore.hiqidashiTree.mode = hiqidashi.mode

    setHiqidashiMap(heyaStore.hiqidashiTree)
  }

  const deleteHiqidashiRec = (id: string) => {
    const hiqidashi = heyaStore.hiqidashiMap.get(id)
    if (!hiqidashi) {
      throw new Error(`hiqidashi not found.`)
    }
    if (hiqidashi.children.length === 0) {
      heyaStore.hiqidashiMap.delete(id)
      return
    } else {
      hiqidashi.children.map((child) => child.id).forEach(deleteHiqidashi)
    }
  }

  const deleteHiqidashi = (id: string) => {
    const hiqidashi = heyaStore.hiqidashiMap.get(id)
    if (!hiqidashi) {
      throw new Error(`hiqidashi not found.`)
    }

    deleteHiqidashiRec(id)

    if (hiqidashi.parentId === '') {
      heyaStore.hiqidashiTree = reactive({
        children: [],
        id: '',
        parentId: '',
        creatorId: '',
        title: '',
        description: '',
        colorCode: '',
        mode: 'normal',
      })
      return
    }

    const parent = heyaStore.hiqidashiMap.get(hiqidashi.parentId)
    if (!parent) {
      throw new Error(`hiqidashi not found.`)
    }

    const idx = parent.children.findIndex((child) => child.id === id)
    if (idx === -1) {
      throw new Error(`hiqidashi not found.`)
    }

    parent.children.splice(idx, 1)
  }

  return {
    heyaStore,
    resetHeya,
    createNewHiqidashi,
    createFirstHiqidashi,
    deleteHiqidashi,
    setHiqidashiMap,
  }
}

// Vue側から使う
export const useHeyaStore = () => {
  const { heyaStore, resetHeya } = useHeyaStoreBase()

  const connectHeya = (heyaId: string) => {
    if (heyaStore.heyaId === heyaId) {
      return
    }
    resetHeya()

    heyaStore.heyaId = heyaId
    heyaStore.webSocket = connectWS(heyaId)
  }

  const createNewHiqidashiAndSend = (parentId: string) => {
    // ここではWS送信のみを行う
    // wsを受け取ったら実際のcreate
    //const { me } = useMe()

    if (!heyaStore.webSocket) {
      console.error('WebSocket not connected')
      return
    }

    sendCreateHiqidashiMessage(heyaStore.webSocket, parentId)
  }

  const deleteHiqidashiAndSend = () => {
    // 実際に削除されるのはWebSocketを受け取ったとき

    if (!heyaStore.webSocket) {
      console.error('WebSocket not connected')
      return
    }

    sendDeleteHiqidashiMessage(heyaStore.webSocket, heyaStore.deleteId)
    heyaStore.deleteId = ''
  }

  const getHiqidashiById = (id: string) => {
    const hiqidashi = heyaStore.hiqidashiMap.get(id)

    if (!hiqidashi) {
      throw new Error(`hiqidashi not found.`)
    }
    return hiqidashi
  }

  type HiqidashiChange = {
    title?: string
    colorCode?: string
  }

  const changeHiqidashiAndSend = (id: string, change: HiqidashiChange) => {
    const hiqidashi = heyaStore.hiqidashiMap.get(id)

    if (!hiqidashi) {
      throw new Error(`hiqidashi not found.`)
    }

    if (change.title) {
      hiqidashi.title = change.title
    }
    if (change.colorCode) {
      hiqidashi.colorCode = change.colorCode
    }

    if (!heyaStore.webSocket) {
      console.error('WebSocket not connected')
      return
    }

    sendEditHiqidashiMessage(heyaStore.webSocket, id, change)
  }

  const changeMode = (id: string, mode: 'normal' | 'edit' | 'init') => {
    const hiqidashi = heyaStore.hiqidashiMap.get(id)

    if (!hiqidashi) {
      throw new Error(`hiqidashi not found.`)
    }

    hiqidashi.mode = mode
  }

  const setLastFocusedId = (id: string) => {
    heyaStore.lastFocusedId = id
  }

  return {
    heyaStore,
    connectHeya,
    createNewHiqidashi: createNewHiqidashiAndSend,
    deleteHiqidashi: deleteHiqidashiAndSend,
    changeHiqidashi: changeHiqidashiAndSend,
    getHiqidashiById,
    changeMode,
    setLastFocusedId,
  }
}

// WebSocket側から使う
export const useHeyaStoreFromWS = () => {
  const {
    heyaStore,
    createNewHiqidashi,
    createFirstHiqidashi,
    deleteHiqidashi,
    resetHeya,
  } = useHeyaStoreBase()

  const setHiqidashi = (
    hiqidashi: Hiqidashi,
    mode: 'normal' | 'init' | 'edit'
  ) => {
    const { id, title, description, colorCode, parentId, creatorId } = hiqidashi

    const hiqidashiTree: HiqidashiTree = {
      children: [],
      id,
      parentId: parentId ?? '',
      creatorId,
      title,
      description,
      colorCode,
      mode,
    }

    if (!parentId) {
      createFirstHiqidashi('', hiqidashiTree)
    } else {
      createNewHiqidashi(parentId, hiqidashiTree)
    }
  }

  const setHiqidashis = (hiqidashis: Hiqidashi[]) => {
    resetHeya()
    constructHiqidashiTree(hiqidashis, setHiqidashi)
  }

  const editHiqidashi = (hiqidashi: WsEditHiqidashi) => {
    const tree = heyaStore.hiqidashiMap.get(hiqidashi.id ?? '')
    if (!tree) {
      throw new Error('invalid hiqidashi id')
    }

    tree.title = hiqidashi.title ?? tree.title
    tree.colorCode = hiqidashi.colorCode ?? tree.colorCode
  }

  return {
    heyaStore,
    setHiqidashi,
    editHiqidashi,
    deleteHiqidashi,
    setHiqidashis,
  }
}
