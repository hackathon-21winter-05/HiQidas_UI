<template>
  <el-dialog
    v-model="visible"
    title="Tips"
    width="30%"
    :before-close="handleClose"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visible = false">Cancel</el-button>
        <el-button type="primary" @click="visible = false">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useHiqidashiStore } from '/@/providers/hiqidashi'

export default defineComponent({
  name: 'DeleteDialog',
  setup(props) {
    const { hiqidashiStore: store } = useHiqidashiStore()

    const visible = computed(() => store.deleteDialogVisible)
    const handleClose = () => {
      store.deleteDialogVisible = false
    }

    return { ...props, visible, handleClose }
  },
})
</script>
