<template>
  <div class="login-container">
    <h1 class="title">HiQidas</h1>
    <el-form ref="loginForm" :model="loginForm" label-position="top">
      <el-form-item label="ユーザーネーム">
        <el-input v-model="loginForm.name" />
      </el-form-item>
      <el-form-item label="パスワード">
        <el-input v-model="loginForm.password" />
      </el-form-item>
      <el-button @click="login">ログイン</el-button>
    </el-form>

    <el-button @click="loginWithPortal">traPortalでログイン</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const loginForm = reactive({ name: '', password: '' })

    const login = () => {
      // TODO: ログインする
      console.log('logged in!', loginForm)
    }

    const loginWithPortal = () => {
      location.href = `https://portal.trap.jp/login?redirect=${location.host}`
    }

    return { loginForm, login, loginWithPortal }
  },
})
</script>

<style lang="scss" scoped>
.login-container {
  margin: 0 auto;
  width: 500px;
  max-width: 90%;
}
</style>
