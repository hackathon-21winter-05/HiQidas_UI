import { inject, InjectionKey, provide, reactive } from 'vue'
import { getOAuthCallback } from '/@/lib/apis/oauth'
import { User } from '/@/lib/pb/protobuf/rest/users'

type Me = User

const meSymbol: InjectionKey<Me> = Symbol()

const createMe = () => reactive(User.fromJSON({}))

export const provideMe = () => {
  provide(meSymbol, createMe())
}

export const useMe = () => {
  const me = inject(meSymbol)
  if (!me) {
    throw new Error('useMe() called without provider.')
  }

  if (me.id === '') {
    // TODO: ここでmeを取得→失敗したらredirect

    oauthRedirect()
  }

  return { me }
}

const oauthRedirect = async () => {
  const { uri } = await getOAuthCallback()
  location.href = uri
}
