<template>
  <p>Redirecting...</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { postOAuthCode } from '/@/lib/apis/oauth'

export default defineComponent({
  name: 'OAuthPage',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const code = route.query.code?.toLocaleString()
    if (!code) {
      throw new Error('OAuth failed')
    }
    postOAuthCode(code).then(() => {
      router.push('/')
    })
  },
})
</script>
