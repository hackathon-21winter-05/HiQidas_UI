import * as Y from 'yjs'

export const addYdocEventListener = (ydoc: Y.Doc, id: string) => {
  if (id === '') {
    return
  }
  const ws = new WebSocket(
    (location.protocol === 'https:' ? 'wss' : 'ws') +
      `://${location.host}/api/ws/yjs/${id}`
  )
  ws.binaryType = 'arraybuffer'

  ws.onopen = () => {
    console.log('ws open')
  }

  ydoc.on('update', (update: Uint8Array) => {
    ws.send(update)
  })

  ws.onmessage = (event: MessageEvent) => {
    Y.applyUpdate(ydoc, new Uint8Array(event.data))
  }
}
