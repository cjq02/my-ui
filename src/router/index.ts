import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/login', name: 'Login', component: () => import('@/views/LoginD.vue') },
  { path: '/login-a', name: 'LoginA', component: () => import('@/views/LoginA.vue') },
  { path: '/login-b', name: 'LoginB', component: () => import('@/views/LoginB.vue') },
  { path: '/login-c', name: 'LoginC', component: () => import('@/views/LoginC.vue') },
  { path: '/login-d', name: 'LoginC', component: () => import('@/views/LoginD.vue') },
  { path: '/', redirect: '/login-a' }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
