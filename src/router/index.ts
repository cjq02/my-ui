import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  // { path: '/login', name: 'Login', component: () => import('@/views/LoginD.vue') },
  { path: '/home', name: 'Home', component: () => import('@/views/Home.vue') },
  { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
  { path: '/sports', name: 'Sports', component: () => import('@/views/login/sports/index.vue') },
  { path: '/internalControl', name: 'InternalControl', component: () => import('@/views/login/internalControl/index.vue') },
  { path: '/education', name: 'Education', component: () => import('@/views/login/education/index.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
