import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

/**
  ログイン済みユーザーなら誰でも閲覧可能なルート
 */
const internalConstantRoutes: Array<RouteRecordRaw> = [
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

/**
  未ログインのユーザーからも閲覧可能なルート
*/
const publicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'LoginPage',
    component: () =>
      import(/* webpackChunkName: "login" */ '/@/views/LoginPage/index.vue'),
    meta: { isPublic: true },
  },
]

/**
  その他必要なルート
 */
const systemRoutes: Array<RouteRecordRaw> = [
  {
    path: '/oauth',
    name: 'OAuthPage',
    component: () =>
      import(/* webpackChunkName: "oauth" */ '/@/views/OAuthPage/index.vue'),
  },
]

export const routes: Array<RouteRecordRaw> = internalConstantRoutes.concat(
  publicRoutes,
  systemRoutes
)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
