import axios from 'axios'
import * as users from '/@/lib/pb/protobuf/rest/users'

export const getMe = async () => {
  const res = await axios.get('/api/users/me', {
    responseType: 'arraybuffer',
  })
  if (res.status !== 200) throw new Error(res.statusText)

  return users.GetUsersMeResponse.decode(new Uint8Array(res.data)).me
}

export const getUserById = async (userId: string) => {
  const res = await axios.get(`/api/users/${userId}`, {
    responseType: 'arraybuffer',
  })

  const data = users.GetUsersMeResponse.decode(new Uint8Array(res.data))

  return data.me
}
