import * as Y from 'yjs'
import { useHeyaStore } from '/@/providers/heya'

export const addYdocEventListener = (ydoc: Y.Doc) => {
  const { heyaStore: store } = useHeyaStore()
  if (!store.webSocket) {
    console.error('No websocket connection')
  }

  ydoc.on('update', () => {
    // ws でsendする
  })
}
