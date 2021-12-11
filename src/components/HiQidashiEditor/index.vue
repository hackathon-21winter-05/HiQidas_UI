<template>
  <editor-content :editor="editor" class="content" />
  <menu-bar v-if="mounted" :editor="editor" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import Collaboration from '@tiptap/extension-collaboration'
import * as Y from 'yjs'
import MenuBar from './MenuBar.vue'
import { addYdocEventListener } from '/@/lib/yjs'

export default defineComponent({
  name: 'HiQidashiEditor',
  components: {
    EditorContent,
    MenuBar,
  },
  props: {
    description: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const ydoc = new Y.Doc()
    const editor = useEditor({
      content: props.description,
      extensions: [
        StarterKit.configure({
          history: false,
        }),
        Highlight,
        Typography,
        Collaboration.configure({
          document: ydoc,
        }),
      ],
    })

    const mounted = ref(false)
    onMounted(() => {
      mounted.value = true
    })
    addYdocEventListener(ydoc)

    return { editor, mounted }
  },
})
</script>

<style lang="scss" scoped>
.content {
  padding: 0 16px 8px 16px;
  text-align: left;
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
