import axios from 'axios'
import { users } from '/@/lib/apis/pb/rest/users'

export const getFavoriteHeyasId = async () => {
  const res = await axios.get('/api/me/favorites')

  const data = users.GetUsersMeFavorites.decode(new Uint8Array(res.data))

  return data
}
