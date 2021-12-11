<template>
  <div class="login-container">
    <div class="login-logos">
      <img class="icon" src="/hiqidas_icon.svg" />
      <img class="logo" src="/@/assets/hiqidas_logo.svg" />
    </div>
    <!-- TODO: ログインのエンドポイント生えたらフォーム作る -->
    <!-- <el-form ref="loginForm" :model="loginForm" label-position="top">
      <el-form-item label="ユーザーネーム">
        <el-input v-model="loginForm.name" />
      </el-form-item>
      <el-form-item label="パスワード">
        <el-input v-model="loginForm.password" />
      </el-form-item>
      <el-button @click="login">ログイン</el-button>
    </el-form> -->

    <button class="login-button" @click="loginWithPortal">
      traPortalでログイン
    </button>

    <div class="register-info">またはアカウントを作成</div>

    <el-card class="create-account">
      <el-input
        v-model="name"
        placeholder="名前を入力"
        class="new-account-name"
      />
      <button class="create-account-button" @click="createAccount">作成</button>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { createUser } from '/@/lib/apis/users'

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const route = useRoute()
    const redirectQuery = ref(
      !route.query.redirect ? '' : (route.query.redirect as string)
    )

    // TODO: ログインのエンドポイント生えたらコメントアウト外して書く
    /* const loginForm = reactive({ name: '', password: '' })

    const login = () => {
      // TODO: ログインする
      console.log('logged in!', loginForm)
    } */

    const loginWithPortal = () => {
      location.href = `https://portal.trap.jp/login?redirect=https://${location.host}?redirect=${redirectQuery.value}`
    }

    const router = useRouter()
    const name = ref('')
    const createAccount = async () => {
      try {
        await createUser(name.value)
        router.push({ path: redirectQuery.value })
      } catch (error) {
        ElMessage({
          message: `エラーが発生しました\n${error}`,
          type: 'error',
          customClass: 'login-page-error-message',
        })
        console.log(error)
      }
    }

    return { redirectQuery, name, loginWithPortal, createAccount }
  },
})
</script>

<style lang="scss">
.new-account-name {
  .el-input__inner {
    border: none;
  }
}

.login-page-error-message {
  p.el-message__content {
    white-space: pre-line;
  }
}
</style>
>

<style lang="scss" scoped>
.login-container {
  height: fit-content;
  width: 500px;
  max-width: 80%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  .login-logos {
    margin-bottom: 20px;

    .icon {
      width: 60px;
      margin-right: 5px;
    }

    .logo {
      height: 60px;
      width: auto;
      padding: 0;
    }
  }

  .login-button {
    width: 210px;
    max-width: 85%;
    margin: 10px 0;
    color: #ffffff;
    font-size: 16px;
    line-height: 2rem;
    background-color: #3859ad;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .register-info {
    color: #afafaf;
    font-size: 16px;
    line-height: 2rem;
  }

  .create-account {
    width: 300px;
    max-width: 90%;
    margin: 10px auto;
    border: medium solid #adadad;

    .create-account-button {
      width: 100%;
      color: #ffffff;
      font-size: 16px;
      line-height: 2rem;
      background-color: #c87b7b;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
}
</style>
