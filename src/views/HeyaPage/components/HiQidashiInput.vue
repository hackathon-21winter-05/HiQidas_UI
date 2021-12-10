<template>
  <div class="hiqidashi-input">
    <el-input v-model="input" placeholder="子ヒキダシの名前を入力" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HiQidashiInput',
  setup() {
    const input = ref('')
    return { input }
  },
})
</script>

<style lang="scss" scoped>
.hiqidashi-input {
  height: 50px;
  width: 300px;
  background-color: #ffffff;
  border-radius: 6px;
  transition: 0.3s height ease-in-out;
  margin: 8px 6px;
  display: flex;
  align-items: center;
}
</style>
