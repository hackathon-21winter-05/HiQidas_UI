import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '/@/router'

router.beforeEach(async (to, _, next) => {
  if (to.meta && to.meta?.isPublic) {
    // 未ログインでも閲覧可なページ
    next()
  } else {
    try {
      await axios.get('/api/users/me', {
        responseType: 'arraybuffer',
      })
    } catch (error) {
      ElMessage({
        message: `エラーが発生しました\n${error}`,
        type: 'error',
      })
      console.log(error)
      next(`/login?redirect=${to.path}`)
    }
  }
})
