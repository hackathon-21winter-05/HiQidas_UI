<template>
  <div
    ref="elRef"
    class="hiqidashi"
    :class="{
      'is-expanded': isExpanded,
      'is-focused': store.lastFocusedId === hiqidashi.id,
    }"
    @click="setFocus"
  >
    <div class="top-menu">
      <span class="material-icons left-button" @click="toggleExpanded">
        {{ isExpanded ? 'expand_less' : 'expand_more' }}
      </span>
      <h3 class="hiqidashi-title" @click="toggleExpanded">
        <!-- eslint-disable-next-line no-irregular-whitespace -->
        {{ hiqidashi.title || '　' }}
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
      <hi-qidashi-editor
        :description="hiqidashi.description"
        :hiqidashi-id="hiqidashi.id"
      />
    </div>
    <div class="avatar-container">
      <div v-for="(user, index) in users" :key="user" class="avatars">
        <el-avatar
          size="medium"
          :style="`border: 2px solid ${colors[index]}`"
          @visible-change="setFocus"
        >
          {{ user }}
        </el-avatar>
        <div class="diamond" :style="`background-color: ${colors[index]}`" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
import HiQidashiEditor from '/@/components/HiQidashiEditor/index.vue'
import { HiqidashiTree } from '/@/lib/hiqidashiTree'
import { getRandomColor } from '/@/lib/utils'
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
    const { heyaStore: store, changeMode, setLastFocusedId } = useHeyaStore()

    const changeToEditMode = () => {
      changeMode(props.hiqidashi.id, 'edit')
    }

    const isExpanded = ref(false)

    const openDeleteDialog = () => {
      store.deleteId = props.hiqidashi.id
      store.deleteDialogVisible = true
    }

    const elRef = ref<HTMLElement>()

    const setFocus = () => {
      setLastFocusedId(props.hiqidashi.id)
      if (elRef.value) {
        elRef.value.scrollIntoView({ block: 'center', inline: 'center' })
      }
    }

    const color = computed(() => props.hiqidashi.colorCode)

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

    const users = ['1', '2', '3', '4'].reverse()
    const colors = users.map(() => getRandomColor())

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
      users,
      colors,
      setFocus,
      store,
    }
  },
})
</script>

<style lang="scss" scoped>
.hiqidashi {
  position: relative;
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

  &.is-focused {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  .avatar-container {
    position: absolute;
    top: -50px;
    left: 250px;
    display: flex;
    flex-direction: row-reverse;
  }
  .avatars {
    z-index: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: -22px;

    .el-avatar {
      z-index: 2;
    }
    .diamond {
      width: 6px;
      height: 6px;
      transform: rotate(45deg);
      margin-top: -3px;
      z-index: 1;
    }
  }
}
</style>
