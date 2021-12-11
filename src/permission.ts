import { ElMessage } from 'element-plus'
import router from '/@/router'
import { useMe } from '/@/providers/me'

router.beforeEach(async (to, _, next) => {
  if (to.meta && to.meta?.isPublic) {
    // 未ログインでも閲覧可なページ
    next()
  } else {
    try {
      await useMe()
      next()
    } catch (error) {
      if (error === 'Not logged in.') {
        ElMessage({
          message: `ログインしてください`,
          type: 'error',
        })
        // 未ログインの場合、ログインページにリダイレクト
        next(`/login?redirect=${to.path}`)
      } else {
        ElMessage({
          message: `エラーが発生しました\n${error}`,
          type: 'error',
        })
        console.log(error)
      }
    }
  }
})
