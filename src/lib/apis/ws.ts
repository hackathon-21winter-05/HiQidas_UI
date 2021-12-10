import { hiqidashi } from '/@/lib/apis/pb/ws/ws'

export const connectWS = (heyaId: string) => {
  const ws = new WebSocket(`ws://api/ws/heya/${heyaId}`)
  ws.onopen = () => {
    console.log('ws open')
  }

  ws.onmessage = (event) => {
    const data = hiqidashi.WsCommunicationData.decode(
      new Uint8Array(event.data)
    )

    // TODO: 実装
    switch (data.payload) {
      case 'getHiqidashi': {
        // hiqidashiを取得する
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
  const data = hiqidashi.WsCommunicationData.create({ deleteHiqidashi: { id } })

  const buffer = hiqidashi.WsCommunicationData.encode(data).finish()
  ws.send(new Uint8Array(buffer))
}

export const sendCreateHiqidashiMessage = (
  ws: WebSocket,
  parentId: string,
  title: string,
  description: string
) => {
  const data = hiqidashi.WsCommunicationData.create({
    createHiqidashi: {
      parentId,
      title,
      description,
    },
  })

  const buffer = hiqidashi.WsCommunicationData.encode(data).finish()
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

  const data = hiqidashi.WsCommunicationData.create({ editHiqidashi: d })

  const buffer = hiqidashi.WsCommunicationData.encode(data).finish()
  ws.send(new Uint8Array(buffer))
}
