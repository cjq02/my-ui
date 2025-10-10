import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  // { path: '/login', name: 'Login', component: () => import('@/views/LoginD.vue') },
  { path: '/home', name: 'Home', component: () => import('@/views/Home.vue') },
  { path: '/lottery', name: 'Lottery', component: () => import('@/views/lottery/index.vue') },
  { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
