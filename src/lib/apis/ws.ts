import { hiqidashi } from '/@/lib/apis/pb/ws/ws'
import { useHeyaStoreFromWS } from '/@/providers/heya'

const { WsCommunicationData } = hiqidashi

export const connectWS = (heyaId: string) => {
  const { setHiqidashi } = useHeyaStoreFromWS()
  const ws = new WebSocket(`ws://api/ws/heya/${heyaId}`)
  ws.onopen = () => {
    console.log('ws open')
  }

  ws.onmessage = (event) => {
    const data = WsCommunicationData.decode(new Uint8Array(event.data))

    // TODO: 実装
    switch (data.payload) {
      case 'getHiqidashi': {
        const hiqidashi = data.getHiqidashi?.hiqidashi
        if (!hiqidashi) {
          throw new Error('invalid response')
        }

        setHiqidashi(hiqidashi)

        break
      }
      case 'getHiqidashis': {
        // hiqidashiを取得する
        break
      }
      case 'createHiqidashi': {
        // hiqidashiを作成する
        break
      }
      case 'editHiqidashi': {
        // hiqidashiを編集する
        break
      }
      case 'deleteHiqidashi': {
        // hiqidashiを削除する
        break
      }
      default: {
        throw new Error('unknown payload')
      }
    }
  }
  return ws
}

export const sendDeleteHiqidashiMessage = (ws: WebSocket, id: string) => {
  const data = WsCommunicationData.create({ deleteHiqidashi: { id } })

  const buffer = WsCommunicationData.encode(data).finish()
  ws.send(new Uint8Array(buffer))
}

export const sendCreateHiqidashiMessage = (
  ws: WebSocket,
  parentId: string,
  title: string,
  description: string
) => {
  const data = WsCommunicationData.create({
    createHiqidashi: {
      parentId,
      title,
      description,
    },
  })

  const buffer = WsCommunicationData.encode(data).finish()
  ws.send(new Uint8Array(buffer))
}

type EditValue = {
  title?: string
  description?: string
  drawing?: string
  colorId?: string
}

export const sendEditHiqidashiMessage = (
  ws: WebSocket,
  id: string,
  val: EditValue
) => {
  const d: hiqidashi.IWsEditHiqidashi = { id }
  if (val.title) d.title = { value: val.title }
  if (val.description) d.description = { value: val.description }
  if (val.drawing) d.drawing = { value: val.drawing }
  if (val.colorId) d.colorId = { value: val.colorId }

  const data = WsCommunicationData.create({ editHiqidashi: d })

  const buffer = WsCommunicationData.encode(data).finish()
  ws.send(new Uint8Array(buffer))
}
