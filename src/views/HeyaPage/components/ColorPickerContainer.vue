<template>
  <div class="color-picker-background" @click="closeColorPicker" />
  <div class="color-picker-container">
    <color-picker theme="light" :color="color" :sucker-hide="false" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { ColorPicker } from 'vue-color-kit'
import { useHeyaStore } from '/@/providers/heya'
import 'vue-color-kit/dist/vue-color-kit.css'

export default defineComponent({
  name: 'ColorPickerContainer',
  components: {
    ColorPicker,
  },
  setup() {
    const { heyaStore: store, getHiqidashiById } = useHeyaStore()

    const hiqidashi = getHiqidashiById(store.colorPickingId)

    const color = ref(hiqidashi.colorId)

    const closeColorPicker = () => {
      // store に反映 + WSで送信

      store.colorPickingId = ''
    }

    return { color, closeColorPicker }
  },
})
</script>

<style lang="scss" scoped>
.color-picker-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.color-picker-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
}
</style>
