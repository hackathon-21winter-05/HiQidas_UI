import axios from 'axios'
import * as users from '/@/lib/pb/protobuf/rest/users'

export const getMe = async () => {
  const res = await axios.get('/api/users/me', {
    responseType: 'arraybuffer',
  })
  if (res.status !== 200) throw new Error(res.statusText)

  return users.GetUsersMeResponse.decode(new Uint8Array(res.data)).me
}

export const createUser = async (name: string) => {
  const req = users.PostUsersRequest.fromJSON({ name: name })
  const buffer = users.PostUsersRequest.encode(req).finish()

  await axios.post('/api/users', new Uint8Array(buffer), {
    responseType: 'arraybuffer',
  })
}
