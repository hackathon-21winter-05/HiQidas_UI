import router from '/@/router'
import { useMe } from '/@/providers/me'

/* router.beforeEach(async (to, _, next) => {
  if (to.meta && to.meta?.isPublic) {
    // 未ログインでも閲覧可なページ
    next()
  } else {
    try {
      await useMe()
    } catch (error) {
      if (error === 'Not logged in.') {
        // 未ログインの場合、ログインページにリダイレクト
        next(`/login?redirect=${to.path}`)
      } else {
        console.log(error)
      }
    }
  }
}) */
