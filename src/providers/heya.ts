import { inject, InjectionKey, provide, reactive } from 'vue'
import { HiqidashiTree } from '/@/lib/hiqidashiTree'
import { hiqidashi } from '/@/lib/apis/pb/ws/ws'
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  connectWS, // TODO: remove ↑
  sendCreateHiqidashiMessage,
  sendDeleteHiqidashiMessage,
  sendEditHiqidashiMessage,
} from '/@/lib/apis/ws'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useMe } from '/@/providers/me'
import { getRandomColor } from '/@/lib/utils'

export interface HeyaStore {
  heyaId: string
  webSocket?: WebSocket
  hiqidashiTree: HiqidashiTree
  hiqidashiMap: Map<string, HiqidashiTree>
  inputTitleIds: string[]
  lastEditedId: string
  deleteDialogVisible: boolean
  deleteId: string
  colorPickingId: string
}

const heyaStoreSymbol: InjectionKey<HeyaStore> = Symbol()

const createHeyaStore = () => {
  // TODO: デバッグ用なのでそのうち消す
  const store = reactive({
    heyaId: '',
    hiqidashiTree: {
      children: [],
      id: 'test',
      parentId: '',
      title: 'first hiqidashi',
      description: '',
      colorId: getRandomColor(),
    },
    hiqidashiMap: new Map(),
    inputTitleIds: ['test'],
    lastEditedId: '',
    deleteDialogVisible: false,
    deleteId: '',
    colorPickingId: '',
  })
  store.hiqidashiMap.set(store.hiqidashiTree.id, store.hiqidashiTree)
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
    heyaStore.hiqidashiTree = reactive({
      children: [],
      id: 'test',
      parentId: '',
      title: '',
      description: '',
      colorId: getRandomColor(),
    })
    heyaStore.hiqidashiMap = new Map()
    heyaStore.inputTitleIds = reactive(['test'])
    heyaStore.lastEditedId = ''
    heyaStore.deleteDialogVisible = false
    heyaStore.deleteId = ''
    heyaStore.colorPickingId = ''

    heyaStore.hiqidashiMap.set(
      heyaStore.hiqidashiTree.id,
      heyaStore.hiqidashiTree
    )
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
        title: '',
        description: '',
        colorId: '',
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
  }
}

// Vue側から使う
export const useHeyaStore = () => {
  const { heyaStore, resetHeya, deleteHiqidashi, createNewHiqidashi } =
    useHeyaStoreBase()

  const connectHeya = (heyaId: string) => {
    if (heyaStore.heyaId === heyaId) {
      return
    }
    resetHeya()

    heyaStore.heyaId = heyaId
    // heyaStore.webSocket = connectWS(heyaId)
  }

  const createNewHiqidashiAndSend = (parentId: string) => {
    // ここではWS送信のみを行う
    // wsを受け取ったら実際のcreate

    if (!heyaStore.webSocket) {
      const id = Math.random().toString(32).substring(2)

      // TODO: デバッグ用なので後で消す
      createNewHiqidashi(parentId, {
        children: [],
        id,
        parentId,
        title: '',
        description: '',
        colorId: '',
      })

      heyaStore.inputTitleIds.push(id)

      console.error('WebSocket not connected')
      return
    }

    sendCreateHiqidashiMessage(heyaStore.webSocket, parentId)
  }

  const deleteHiqidashiAndSend = () => {
    deleteHiqidashi(heyaStore.deleteId)

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
    colorId?: string
  }

  const changeHiqidashiAndSend = (id: string, change: HiqidashiChange) => {
    const hiqidashi = heyaStore.hiqidashiMap.get(id)

    if (!hiqidashi) {
      throw new Error(`hiqidashi not found.`)
    }

    if (change.title) {
      hiqidashi.title = change.title
    }
    if (change.colorId) {
      hiqidashi.colorId = change.colorId
    }

    if (!heyaStore.webSocket) {
      console.error('WebSocket not connected')
      return
    }

    sendEditHiqidashiMessage(heyaStore.webSocket, id, change)
  }

  const isInputOpenedById = (id: string) => {
    // const me = useMe()
    const hiqidashi = heyaStore.hiqidashiMap.get(id)

    if (!hiqidashi) {
      throw new Error(`hiqidashi not found.`)
    }

    // TODO: ↓
    return heyaStore.inputTitleIds.includes(id)
    /* && me.id === hiqidashi.creatorId */
  }

  const deleteInputTitleId = (id: string) => {
    const idx = heyaStore.inputTitleIds.indexOf(id)
    if (idx === -1) {
      return
    }
    heyaStore.inputTitleIds.splice(idx, 1)
  }

  return {
    heyaStore,
    connectHeya,
    createNewHiqidashi: createNewHiqidashiAndSend,
    deleteHiqidashi: deleteHiqidashiAndSend,
    changeHiqidashi: changeHiqidashiAndSend,
    getHiqidashiById,
    isInputOpenedById,
    deleteInputTitleId,
  }
}

// WebSocket側から使う
export const useHeyaStoreFromWS = () => {
  const {
    heyaStore,
    createNewHiqidashi,
    createFirstHiqidashi,
    deleteHiqidashi,
  } = useHeyaStoreBase()

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
      parentId,
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
    deleteHiqidashi,
  }
}
