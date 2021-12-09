import { inject, InjectionKey, provide, reactive } from 'vue'
import { users } from '/@/lib/apis/pb/rest/users'

type Me = users.User

const meSymbol: InjectionKey<Me> = Symbol()

const createMe = () => reactive(new users.User())

export const provideMe = () => {
  provide(meSymbol, createMe())
}

export const useMe = () => {
  const me = inject(meSymbol)
  if (!me) {
    throw new Error('useMe() called without provider.')
  }

  return { me }
}
