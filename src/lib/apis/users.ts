import axios from 'axios'
import { users } from '/@/lib/apis/pb/rest/users'

export const createUser = async (name: string) => {
  const req = users.PostUsersRequest.create({ name: name })
  const buffer = users.PostUsersRequest.encode(req).finish()

  await axios.post('/api/users', new Uint8Array(buffer))
}
