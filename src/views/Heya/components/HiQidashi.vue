<template>
  <div class="hi-qidashi" :class="{ 'is-expanded': isExpanded }">
    <span class="top-menu">
      <span
        class="material-icons left-button"
        @click="isExpanded = !isExpanded"
      >
        {{ isExpanded ? 'expand_less' : 'expand_more' }}
      </span>
      <h3>{{ hiqidashi.title }}</h3>
      <span class="material-icons right-button"> more_horiz </span>
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
    const isExpanded = true

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
        initialValue: props.hiqidashi.description,
      })
    }

    onMounted(makeEasyMDE)
    return { ...props, isExpanded, editor }
  },
})
</script>

<style lang="scss" scoped>
.hi-qidashi {
  height: 50px;
  width: 300px;
  background-color: #ffffff;
  border: medium solid #e9b9d0;
  border-radius: 10px;
  transition: 0.3s height ease-in-out;

  &.is-expanded {
    height: 100%;
    border: medium solid #e9b9d0;
  }

  .top-menu {
    width: 300px;
    height: 50px;
    display: inline-flex;
    align-items: center;

    .left-button {
      margin-left: 10px;
      float: left;
    }

    .right-button {
      margin-right: 10px;
      float: right;
    }
  }

  .md-text-box {
    height: 100%;
    overflow: auto;
  }
}
</style>
