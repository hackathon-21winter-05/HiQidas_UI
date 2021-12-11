import { WsHeyaData } from '/@/lib/pb/protobuf/ws/ws'
import { useHeyaStoreFromWS } from '/@/providers/heya'
import { useMe } from '/@/providers/me'

export const connectWS = (heyaId: string) => {
  const { setHiqidashi, editHiqidashi, deleteHiqidashi, setHiqidashis } =
    useHeyaStoreFromWS()
  const { me } = useMe()
  const ws = new WebSocket(
    (location.protocol === 'https:' ? 'wss' : 'ws') +
      `://${location.host}/api/ws/heya/${heyaId}`
  )
  ws.binaryType = 'arraybuffer'
  ws.onopen = () => {
    console.log('ws open')
  }

  ws.onmessage = (event) => {
    const data = WsHeyaData.decode(new Uint8Array(event.data))

    if (data.sendHiqidashi) {
      const hiqidashi = data.sendHiqidashi?.hiqidashi
      if (!hiqidashi) {
        throw new Error('invalid response')
      }
      if (me.id === hiqidashi.parentId) setHiqidashi(hiqidashi, 'init')
      else setHiqidashi(hiqidashi, 'normal')
    } else if (data.sendHiqidashis) {
      const hiqidashis = data.sendHiqidashis?.hiqidashis
      if (!hiqidashis) {
        throw new Error('invalid response')
      }
      setHiqidashis(hiqidashis)
    } else if (data.editHiqidashi) {
      const hiqidashi = data.editHiqidashi
      if (!hiqidashi) {
        throw new Error('invalid response')
      }
      editHiqidashi(hiqidashi)
    } else if (data.deleteHiqidashi) {
      const id = data.deleteHiqidashi?.id
      if (!id) {
        throw new Error('invalid response')
      }
      deleteHiqidashi(id)
    } else if (data.error) {
      throw new Error('error occured')
    } else {
      throw new Error('unknown payload')
    }
  }
  return ws
}

export const sendDeleteHiqidashiMessage = (ws: WebSocket, id: string) => {
  const data = WsHeyaData.fromJSON({ deleteHiqidashi: { id } })

  const buffer = WsHeyaData.encode(data).finish()
  ws.send(new Uint8Array(buffer))
}

export const sendCreateHiqidashiMessage = (ws: WebSocket, parentId: string) => {
  console.log(parentId)
  const data = WsHeyaData.fromJSON({
    createHiqidashi: {
      parentId,
    },
  })

  console.log(data)

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
  const d = { id, ...val }

  const data = WsHeyaData.fromJSON({ editHiqidashi: d })

  const buffer = WsHeyaData.encode(data).finish()
  ws.send(new Uint8Array(buffer))
}
