import { inject, InjectionKey, provide, reactive } from 'vue'

export interface HiqidashiStore {
  addingChildId: string
  lastEditedId: string
  deleteDialogVisible: boolean
  deleteId: string
}

const hiqidashiStoreSymbol: InjectionKey<HiqidashiStore> = Symbol()

const createHiqidashiStore = () =>
  reactive({
    addingChildId: '',
    lastEditedId: '',
    deleteDialogVisible: false,
    deleteId: '',
  })

export const provideHiqidashiStore = () =>
  provide(hiqidashiStoreSymbol, createHiqidashiStore())

export const useHiqidashiStore = () => {
  const hiqidashiStore = inject(hiqidashiStoreSymbol)
  if (!hiqidashiStore) {
    throw new Error('useHiqidashiStore() called without provider.')
  }

  return { hiqidashiStore }
}
