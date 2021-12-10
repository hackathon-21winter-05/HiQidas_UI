import { hiqidashi } from '/@/lib/apis/pb/ws/ws'
import { useHeyaStoreFromWS } from '/@/providers/heya'

const { WsHeyaData } = hiqidashi

export const connectWS = (heyaId: string) => {
  const { setHiqidashi, editHiqidashi, deleteHiqidashi } = useHeyaStoreFromWS()
  const ws = new WebSocket(`ws://api/ws/heya/${heyaId}`)
  ws.onopen = () => {
    console.log('ws open')
  }

  ws.onmessage = (event) => {
    const data = WsHeyaData.decode(new Uint8Array(event.data))

    // TODO: 実装
    switch (data.payload) {
      case 'sendHiqidashi': {
        const hiqidashi = data.sendHiqidashi?.hiqidashi
        if (!hiqidashi) {
          throw new Error('invalid response')
        }
        setHiqidashi(hiqidashi)
        break
      }
      case 'sendHiqidashis': {
        const hiqidashis = data.sendHiqidashis?.hiqidashis
        if (!hiqidashis) {
          throw new Error('invalid response')
        }
        hiqidashis.forEach(setHiqidashi)

        break
      }
      case 'editHiqidashi': {
        const hiqidashi = data.editHiqidashi
        if (!hiqidashi) {
          throw new Error('invalid response')
        }
        editHiqidashi(hiqidashi)
        break
      }
      case 'deleteHiqidashi': {
        const id = data.deleteHiqidashi?.id
        if (!id) {
          throw new Error('invalid response')
        }
        deleteHiqidashi(id)
        break
      }
      case 'error': {
        throw new Error('error occured')
      }
      default: {
        throw new Error('unknown payload')
      }
    }
  }
  return ws
}

export const sendDeleteHiqidashiMessage = (ws: WebSocket, id: string) => {
  const data = WsHeyaData.create({ deleteHiqidashi: { id } })

  const buffer = WsHeyaData.encode(data).finish()
  ws.send(new Uint8Array(buffer))
}

export const sendCreateHiqidashiMessage = (ws: WebSocket, parentId: string) => {
  const data = WsHeyaData.create({
    createHiqidashi: {
      parentId,
    },
  })

  const buffer = WsHeyaData.encode(data).finish()
  ws.send(new Uint8Array(buffer))
}

type EditValue = {
  title?: string
  description?: string
  drawing?: string
  colorCode?: string
}

export const sendEditHiqidashiMessage = (
  ws: WebSocket,
  id: string,
  val: EditValue
) => {
  const d: hiqidashi.IWsEditHiqidashi = { id }
  if (val.title) d.title = { value: val.title }
  if (val.drawing) d.drawing = { value: val.drawing }
  if (val.colorCode) d.colorCode = { value: val.colorCode }

  const data = WsHeyaData.create({ editHiqidashi: d })

  const buffer = WsHeyaData.encode(data).finish()
  ws.send(new Uint8Array(buffer))
}
