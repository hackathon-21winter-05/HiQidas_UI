import axios from 'axios'
import * as users from '/@/lib/pb/protobuf/rest/users'

export const createUser = async (name: string) => {
  const req = users.PostUsersRequest.fromJSON({ name: name })
  const buffer = users.PostUsersRequest.encode(req).finish()

  await axios.post('/api/users', new Uint8Array(buffer))
}
