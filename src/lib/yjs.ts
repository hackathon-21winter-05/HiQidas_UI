import * as Y from 'yjs'

export const addYdocEventListener = (ydoc: Y.Doc) => {
  ydoc.on('update', (update: Uint8Array) => {
    // ws でsendする
  })
}
