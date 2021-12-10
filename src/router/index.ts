import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    component: () =>
      import(/* webpackChunkName: "home" */ '/@/views/HomePage/index.vue'),
  },
  {
    path: '/:id',
    name: 'HeyaPage',
    component: () =>
      import(/* webpackChunkName: "about" */ '/@/views/HeyaPage/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
