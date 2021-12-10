<template>
  <div class="color-picker-background" @click="closeColorPicker" />
  <div class="color-picker-container">
    <color-picker
      theme="light"
      :color="color"
      :colors-default="colors"
      @change-color="changeColor"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { ColorPicker } from 'vue-color-kit'
import { useHeyaStore } from '/@/providers/heya'
import { getDefaultColors } from '/@/lib/utils'
import 'vue-color-kit/dist/vue-color-kit.css'

export default defineComponent({
  name: 'ColorPickerContainer',
  components: {
    ColorPicker,
  },
  setup() {
    const {
      heyaStore: store,
      getHiqidashiById,
      changeHiqidashiColor,
    } = useHeyaStore()

    const hiqidashi = getHiqidashiById(store.colorPickingId)
    const color = computed(() => hiqidashi.colorId)

    const colors = getDefaultColors()

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const changeColor = (val: any) => {
      hiqidashi.colorId = val.hex
    }

    const closeColorPicker = () => {
      changeHiqidashiColor(store.colorPickingId, color.value)

      store.colorPickingId = ''
    }

    return { color, closeColorPicker, changeColor, colors }
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
  top: 70%;
  left: 70%;
  transform: translate(-50%, -50%);
  z-index: 10;
}
</style>
