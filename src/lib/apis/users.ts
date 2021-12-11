import axios from 'axios'
import { GetUsersMeResponse, User } from '/@/lib/pb/protobuf/rest/users'

export const getMe = async () => {
  const res = await axios.get('/api/users/me', {
    responseType: 'arraybuffer',
  })
  if (res.status !== 200) throw new Error(res.statusText)

  return GetUsersMeResponse.decode(new Uint8Array(res.data)).me
}
