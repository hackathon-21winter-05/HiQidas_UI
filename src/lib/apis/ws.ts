import { hiqidashi } from '/@/lib/apis/pb/ws/ws'

const ws = new WebSocket(`ws://api/ws`)

ws.onopen = () => {
  console.log('ws open')
}

ws.onmessage = (event) => {
  const data = hiqidashi.WsCommunicationData.decode(new Uint8Array(event.data))

  // TODO: 実装
  if (data.getHiqidashis) {
    // hiqidashiを反映させる
  } else if (data.deleteHiqidashi) {
    // hiqidashiを削除する
  } else if (data.createHiqidashi) {
    // hiqidashiを作成する
  } else if (data.editHiqidashi) {
    // hiqidashiを編集する
  } else if (data.getHiqidashi) {
    // hiqidashiを取得する
  } else {
    throw new Error('unknown websocket message')
  }
}

export const sendDeleteHiqidashiMessage = (id: string) => {
  const data = hiqidashi.WsCommunicationData.create({ deleteHiqidashi: { id } })

  const buffer = hiqidashi.WsCommunicationData.encode(data).finish()
  ws.send(new Uint8Array(buffer))
}

export const sendCreateHiqidashiMessage = (
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

export const sendEditHiqidashiMessage = (id: string, val: EditValue) => {
  const d: hiqidashi.IWsEditHiqidashi = { id }
  if (val.title) d.title = { value: val.title }
  if (val.description) d.description = { value: val.description }
  if (val.drawing) d.drawing = { value: val.drawing }
  if (val.colorId) d.colorId = { value: val.colorId }

  const data = hiqidashi.WsCommunicationData.create({ editHiqidashi: d })

  const buffer = hiqidashi.WsCommunicationData.encode(data).finish()
  ws.send(new Uint8Array(buffer))
}
