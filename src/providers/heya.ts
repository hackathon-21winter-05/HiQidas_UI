import { inject, InjectionKey, provide, reactive } from 'vue'
import { HiqidashiTree } from '/@/lib/hiqidashiTree'

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

export const useHeyaStore = () => {
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

  const connectHeya = (heyaId: string) => {
    if (heyaStore.heyaId === heyaId) {
      return
    }
    resetHeya()

    heyaStore.heyaId = heyaId

    // TODO: ws connect
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
    connectHeya,
    setHiqidashiMap,
    createNewHiqidashi,
    createFirstHiqidashi,
  }
}
