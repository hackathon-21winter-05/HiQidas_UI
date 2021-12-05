<template>
  <div class="hi-qidashi" :class="{ 'is-expanded': isExpanded }">
    <span class="top-menu">
      <span class="material-icons left-icon" @click="changeExpand">
        {{ isExpanded ? 'expand_less' : 'expand_more' }}
      </span>
      <h3>{{ hiqidashi.title }}</h3>
    </span>
    <span v-show="isExpanded" class="md-text-box">
      <textarea id="md-text-area" />
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, onMounted } from 'vue'
import EasyMDE from 'easymde'

export default defineComponent({
  name: 'HiQidashi',
  props: {
    hiqidashi: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    let isExpanded = false
    const changeExpand = () => {
      isExpanded = !isExpanded
    }

    const editor: Ref<null | EasyMDE> = ref(null)

    const makeEasyMDE = () => {
      const element = document.getElementById('md-text-area')
      if (!element) {
        return
      }

      editor.value = new EasyMDE({
        element: element,
        toolbar: [
          'bold',
          'italic',
          'heading',
          '|',
          'quote',
          'unordered-list',
          'ordered-list',
          '|',
          'link',
          'preview',
        ],
      })
    }

    onMounted(makeEasyMDE)
    return { ...props, isExpanded, editor, changeExpand }
  },
})
</script>

<style lang="scss" scoped>
.hi-qidashi {
  height: 50px;
  width: 150px;
  padding: 0;
  margin: 0;
  border: medium solid #e9b9d0;
  transition: 0.3s height ease-in-out;

  &.is-expanded {
    max-height: 60vh;
  }

  .top-menu {
    display: inline-flex;
    align-items: center;

    .left-icon {
      float: left;
    }
  }
}
</style>
