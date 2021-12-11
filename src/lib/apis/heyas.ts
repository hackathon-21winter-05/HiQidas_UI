import axios from 'axios'
import * as heya from '/@/lib/pb/protobuf/rest/heyas'

export const getHeyas = async () => {
  const res = await axios.get('/api/heyas', { responseType: 'arraybuffer' })

  const data = heya.GetHeyasResponse.decode(new Uint8Array(res.data))

  return data
}

export const createHeya = async (title: string, description: string) => {
  const req = heya.PostHeyasRequest.fromJSON({
    title: title,
    description: description,
  })
  const buffer = heya.PostHeyasRequest.encode(req).finish()

  const res = await axios.post('/api/heyas', new Uint8Array(buffer), {
    responseType: 'arraybuffer',
  })

  const data = heya.PostHeyasResponse.decode(new Uint8Array(res.data))

  return data
}

export const editHeyaData = async (
  heyaId: string,
  newTitle: string,
  newDescription: string
) => {
  const req = heya.PutHeyasHeyaIdRequest.fromJSON({
    title: newTitle,
    description: newDescription,
  })
  const buffer = heya.PutHeyasHeyaIdRequest.encode(req).finish()

  await axios.put(`/api/heyas/${heyaId}`, new Uint8Array(buffer))
}

export const deleteHeya = async (heyaId: string) => {
  await axios.delete(`/api/heyas/${heyaId}`)
}
