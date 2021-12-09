<template>
  <div class="hiqidashi" :class="{ 'is-expanded': isExpanded }">
    <div class="top-menu">
      <span
        class="material-icons left-button"
        @click="isExpanded = !isExpanded"
      >
        {{ isExpanded ? 'expand_less' : 'expand_more' }}
      </span>
      <h3 class="hiqidashi-title">{{ hiqidashi.title }}</h3>
      <span class="material-icons right-button"> more_horiz </span>
    </div>
    <div v-show="isExpanded">
      <editor-content :editor="editor" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'

export default defineComponent({
  name: 'HiQidashi',
  components: {
    EditorContent,
  },
  props: {
    hiqidashi: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const isExpanded = ref(false)

    const editor = useEditor({
      content: props.hiqidashi.description,
      extensions: [StarterKit, Highlight, Typography],
    })

    return { ...props, isExpanded, editor }
  },
})
</script>

<style lang="scss" scoped>
.hiqidashi {
  display: block;
  height: 50px;
  width: 300px;
  background-color: #ffffff;
  border: medium solid #e9b9d0;
  border-radius: 10px;
  transition: 0.3s height ease-in-out;

  &.is-expanded {
    height: auto;
    border: medium solid #e9b9d0;
  }

  .top-menu {
    width: 300px;
    height: 50px;
    padding: 0 10px;
    display: inline-flex;
    align-items: center;

    .hiqidashi-title {
      width: 232px;
      text-align: left;
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
