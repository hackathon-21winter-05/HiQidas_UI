import axios from 'axios'
import { heya } from '/@/lib/apis/pb/rest/heyas'

export const getHeyas = async () => {
  const res = await axios.get('/api/heyas')

  const data = heya.GetHeyasResponse.decode(new Uint8Array(res.data))

  return data
}
