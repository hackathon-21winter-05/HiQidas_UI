import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "home" */ '/@/views/HomePage/index.vue'),
  },
  {
    path: '/heya',
    name: 'Heya',
    component: () =>
      import(/* webpackChunkName: "about" */ '/@/views/HeyaPage/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
