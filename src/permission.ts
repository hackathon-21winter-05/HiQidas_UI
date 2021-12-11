import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '/@/router'

router.beforeEach(async (to, _, next) => {
  if (to.meta && to.meta?.isPublic) {
    // 未ログインでも閲覧可なページ
    next()
  } else {
    const res = await axios.get('/api/users/me', {
      responseType: 'arraybuffer',
    })
    if (res.status === 401) {
      ElMessage({
        message: `ログインしてください`,
        type: 'error',
      })
      // 未ログインの場合、ログインページにリダイレクト
      next(`/login?redirect=${to.path}`)
    } else {
      ElMessage({
        message: `エラーが発生しました\n${res}`,
        type: 'error',
      })
      console.log(res)
    }
  }
})
