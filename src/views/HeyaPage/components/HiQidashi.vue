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
      <textarea ref="mdElement" />
    </div>
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
    const isExpanded = ref(true) // テキストの初期値をセットする為最初は true

    const editor: Ref<null | EasyMDE> = ref(null)
    const mdElement = ref<HTMLElement>()

    const makeEasyMDE = () => {
      isExpanded.value = false
      if (mdElement.value === undefined) {
        return
      }

      editor.value = new EasyMDE({
        element: mdElement.value,
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
    return { ...props, isExpanded, editor, mdElement }
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
