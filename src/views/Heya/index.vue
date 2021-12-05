<template>
  <div class="about">
    <div class="navbar">
      <router-link to="/" class="title"><h1>HiQidas</h1></router-link>
      <span class="heya-name">Heya Name</span>
    </div>
    <div class="main">
      <h1>This is a heya page</h1>
      <textarea id="md-text-area" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from 'vue'
import EasyMDE from 'easymde'

export default defineComponent({
  name: 'Heya',
  setup() {
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

    return { editor }
  },
})
</script>

<style lang="scss" scoped>
.about {
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-rows: 60px 1fr;

  .navbar {
    display: inline-flex;
    align-items: center;
    grid-column: 1;
    grid-row: 1;
    background-color: #e9b9d0;

    .title {
      text-decoration: none;
      float: left;
      margin-left: 10px;
    }

    .heya-name {
      font-size: 24px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .main {
    overflow: auto;
    grid-column: 1;
    grid-row: 2;

    #md-text-area {
      height: 167px;
      width: 360px;
    }
  }
}
</style>
