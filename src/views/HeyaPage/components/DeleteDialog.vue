<template>
  <el-dialog v-model="visible" title="Tips" width="30%">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visible = false">Cancel</el-button>
        <el-button type="primary" @click="deleteHandler">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useHeyaStore } from '/@/providers/heya'

export default defineComponent({
  name: 'DeleteDialog',
  setup(props) {
    const { heyaStore: store, deleteHiqidashi } = useHeyaStore()

    const visible = computed({
      get: () => store.deleteDialogVisible,
      set: (b: boolean) => (store.deleteDialogVisible = b),
    })

    const deleteHandler = () => {
      deleteHiqidashi()
      store.deleteDialogVisible = false
    }

    return { ...props, visible, deleteHandler }
  },
})
</script>
