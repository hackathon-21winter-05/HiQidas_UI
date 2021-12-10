<template>
  <div ref="elRef" class="hiqidashi" :class="{ 'is-expanded': isExpanded }">
    <div class="top-menu">
      <span class="material-icons left-button" @click="toggleExpanded">
        {{ isExpanded ? 'expand_less' : 'expand_more' }}
      </span>
      <h3 class="hiqidashi-title" @click="toggleExpanded">
        {{ hiqidashi.title }}
      </h3>
      <el-dropdown trigger="click">
        <span class="material-icons right-button"> more_horiz </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="changeToEditMode"
              >タイトルを変更</el-dropdown-item
            >
            <el-dropdown-item @click="openColorPicker">
              ヒキダシのカラーを変更</el-dropdown-item
            >
            <el-dropdown-item v-if="!isRootHiqidashi" @click="openDeleteDialog"
              >このヒキダシを削除</el-dropdown-item
            >
            <!-- TODO: デザインにあわせる -->
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div v-show="isExpanded">
      <hi-qidashi-editor :description="hiqidashi.description" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref } from 'vue'
import HiQidashiEditor from '/@/components/HiQidashiEditor/index.vue'
import { HiqidashiTree } from '/@/lib/hiqidashiTree'
import { useHeyaStore } from '/@/providers/heya'

export default defineComponent({
  name: 'HiQidashi',
  components: {
    HiQidashiEditor,
  },
  props: {
    hiqidashi: {
      type: Object as PropType<HiqidashiTree>,
      required: true,
    },
  },
  setup(props) {
    const { heyaStore: store, changeMode } = useHeyaStore()

    const changeToEditMode = () => {
      changeMode(props.hiqidashi.id, 'edit')
    }

    const isExpanded = ref(false)

    const openDeleteDialog = () => {
      store.deleteId = props.hiqidashi.id
      store.deleteDialogVisible = true
    }

    const elRef = ref<HTMLElement>()

    onMounted(() => {
      if (elRef.value) {
        elRef.value.scrollIntoView({ block: 'center', inline: 'center' })
      }
    })

    const color = computed(() => props.hiqidashi.colorId)

    const openColorPicker = () => {
      store.colorPickingId = props.hiqidashi.id
    }

    const toggleExpanded = () => {
      if (elRef.value) {
        elRef.value.scrollIntoView({ block: 'center', inline: 'center' })
      }
      isExpanded.value = !isExpanded.value
    }

    const isRootHiqidashi = computed(
      () => props.hiqidashi.id === store.hiqidashiTree.id
    )

    return {
      ...props,
      changeToEditMode,
      isExpanded,
      elRef,
      openDeleteDialog,
      openColorPicker,
      color,
      isRootHiqidashi,
      toggleExpanded,
    }
  },
})
</script>

<style lang="scss" scoped>
.hiqidashi {
  display: block;
  height: 50px;
  width: 300px;
  background-color: #ffffff;
  border: 2px solid v-bind(color);
  border-radius: 6px;
  transition: 0.3s height ease-in-out;
  margin: 8px 6px;

  &.is-expanded {
    height: auto;
  }

  &:focus-within {
    box-shadow: 0px 2px 4px;
  }

  .top-menu {
    width: 300px;
    height: 50px;
    padding: 0 10px;
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    .hiqidashi-title {
      width: 232px;
      text-align: left;
      font-weight: 400;
    }

    .left-button {
      float: left;
    }

    .right-button {
      float: right;
    }
  }
}
</style>
