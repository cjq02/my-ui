import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  // { path: '/login', name: 'Login', component: () => import('@/views/LoginD.vue') },
  { path: '/home', name: 'Home', component: () => import('@/views/Home.vue') },
  { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
  { path: '/sports', name: 'Sports', component: () => import('@/views/sports/index.vue') },
  { path: '/internalControl', name: 'InternalControl', component: () => import('@/views/internalControl/index.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
