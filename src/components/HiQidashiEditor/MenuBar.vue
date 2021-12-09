<template>
  <div class="container">
    <template v-for="(item, index) in items">
      <div
        v-if="item.type === 'divider'"
        :key="`divider${index}`"
        class="divider"
      />
      <menu-item
        v-else
        :key="index"
        :icon="item.icon ?? ''"
        :title="item.title ?? ''"
        :action="item.action ?? (() => null)"
        :is-active="item.isActive"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import MenuItem from './MenuItem.vue'
import { Editor } from '@tiptap/vue-3'

export default defineComponent({
  name: 'MenuBar',
  components: {
    MenuItem,
  },
  props: {
    editor: {
      type: Object as PropType<Editor>,
      required: true,
    },
  },
  setup(props) {
    const items = [
      {
        icon: 'format_bold',
        title: 'Bold',
        action: () => props.editor.chain().focus().toggleBold().run(),
        isActive: () => props.editor.isActive('bold'),
      },
      {
        icon: 'format_italic',
        title: 'Italic',
        action: () => props.editor.chain().focus().toggleItalic().run(),
        isActive: () => props.editor.isActive('italic'),
      },
      {
        icon: 'title',
        title: 'Heading 1',
        action: () =>
          props.editor.chain().focus().toggleHeading({ level: 1 }).run(),
        isActive: () => props.editor.isActive('heading', { level: 1 }),
      },
      {
        type: 'divider',
      },
      {
        icon: 'format_quote',
        title: 'Blockquote',
        action: () => props.editor.chain().focus().toggleBlockquote().run(),
        isActive: () => props.editor.isActive('blockquote'),
      },

      {
        icon: 'format_list_bulleted',
        title: 'Bullet List',
        action: () => props.editor.chain().focus().toggleBulletList().run(),
        isActive: () => props.editor.isActive('bulletList'),
      },
      {
        icon: 'format_list_numbered',
        title: 'Ordered List',
        action: () => props.editor.chain().focus().toggleOrderedList().run(),
        isActive: () => props.editor.isActive('orderedList'),
      },
    ]
    return { items }
  },
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  flex-wrap: wrap;
  margin: 0.25rem 1rem;
  padding: 0.5rem 0;
  border-top: 1px solid #d8d8d8;
}

.divider {
  width: 2px;
  height: 1.25rem;
  background-color: rgba(#000, 0.1);
  margin-left: 0.5rem;
  margin-right: 0.75rem;
}
</style>
