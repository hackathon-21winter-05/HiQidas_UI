import { inject, InjectionKey, provide, reactive } from 'vue'
import { User } from '/@/lib/pb/protobuf/rest/users'
import { getMe } from '/@/lib/apis/users'

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
    getMe()
      .then((fetchedMe) => {
        if (fetchedMe) {
          me.id = fetchedMe.id
          me.name = fetchedMe.name
        }
      })
      .catch(() => {
        throw new Error('Not logged in.')
      })
  }

  return { me }
}
