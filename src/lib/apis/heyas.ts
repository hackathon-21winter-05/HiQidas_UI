import axios from 'axios'
import { heya } from '/@/lib/apis/pb/rest/heyas'

export const getHeyas = async () => {
  const res = await axios.get('/api/heyas')

  const data = heya.GetHeyasResponse.decode(new Uint8Array(res.data))

  return data
}

export const createHeya = async (title: string, description: string) => {
  const req = heya.PostHeyasRequest.create({
    title: title,
    description: description,
  })
  const buffer = heya.PostHeyasRequest.encode(req).finish()

  const res = await axios.post('/api/heyas', new Uint8Array(buffer))

  const data = heya.PostHeyasResponse.decode(new Uint8Array(res.data))

  return data
}

export const editHeyaData = async (
  heyaId: string,
  newTitle: string,
  newDescription: string
) => {
  const req = heya.PutHeyasHeyaIdRequest.create({
    title: newTitle,
    description: newDescription,
  })
  const buffer = heya.PutHeyasHeyaIdRequest.encode(req).finish()

  await axios.put(`/api/heyas/${heyaId}`, new Uint8Array(buffer))
}
