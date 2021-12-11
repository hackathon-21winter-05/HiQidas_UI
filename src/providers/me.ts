import axios from 'axios'
import { inject, InjectionKey, provide, reactive } from 'vue'
import { getOAuthCallback } from '/@/lib/apis/oauth'
import * as users from '/@/lib/pb/protobuf/rest/users'

type Me = users.User

const meSymbol: InjectionKey<Me> = Symbol()

const createMe = () => reactive(users.User.fromJSON({}))

export const provideMe = () => {
  provide(meSymbol, createMe())
}

export const useMe = async () => {
  const me = inject(meSymbol)
  if (!me) {
    throw new Error('useMe() called without provider.')
  }

  if (me.id === '') {
    // TODO: ここでmeを取得→失敗したらredirect
    const res = await axios.get('/api/users/me')
    const data = users.GetUsersMeResponse.decode(res.data)

    if (!data.me || !data.me.id) {
      throw new Error('Not logged in.')
    }

    oauthRedirect()
  }

  return { me }
}

const oauthRedirect = async () => {
  const { uri } = await getOAuthCallback()
  location.href = uri
}
