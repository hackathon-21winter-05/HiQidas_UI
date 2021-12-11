<template>
  <div class="heya">
    <div class="navbar">
      <router-link to="/">
        <img class="logo" src="/@/assets/hiqidas_logo.svg" />
      </router-link>
      <span class="heya-name">{{ tree.title }}</span>
    </div>
    <div class="heya-main">
      <div class="heya-container">
        <preload-icons />
        <color-picker-container v-if="colorPickingId" />
        <delete-dialog />

        <hi-qidashi-input
          v-if="tree.mode === 'init'"
          :first="true"
          :tree="tree"
        />
        <hi-qidashi-tree v-else :tree="tree" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import HiQidashiTree from './components/HiQidashiTree.vue'
import HiQidashiInput from './components/HiQidashiInput.vue'
import PreloadIcons from './components/PreloadIcons.vue'
import DeleteDialog from './components/DeleteDialog.vue'
import ColorPickerContainer from './components/ColorPickerContainer.vue'
import { useHeyaStore } from '/@/providers/heya'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'HeyaPage',
  components: {
    HiQidashiTree,
    HiQidashiInput,
    DeleteDialog,
    PreloadIcons,
    ColorPickerContainer,
  },
  setup() {
    const { heyaStore: store, connectHeya, createNewHiqidashi } = useHeyaStore()
    const route = useRoute()
    const heyaId = route.params.id.toLocaleString()
    connectHeya(heyaId)

    const tree = computed(() => store.hiqidashiTree)
    const colorPickingId = computed(() => store.colorPickingId)

    return { tree, createNewHiqidashi, colorPickingId }
  },
})
</script>

<style lang="scss" scoped>
.heya {
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-rows: 60px 1fr;

  .navbar {
    display: inline-flex;
    align-items: center;
    grid-row: 1;
    background-color: #c87b7b;

    .logo {
      float: left;
      margin-left: 10px;
    }

    .heya-name {
      font-size: 24px;
      color: #ffffff;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .heya-main {
    overflow: auto;
    grid-row: 2;
  }
  .heya-container {
    padding: 50%;
    display: inline-block;
  }
}
</style>
