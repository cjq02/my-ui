<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, reactive } from 'vue'

const showTopNav = ref(true)

// 悬浮按钮拖拽（在导航隐藏时出现）
const dragPos = reactive({ x: 0, y: 0 })
const dragging = ref(false)
let offsetX = 0
let offsetY = 0

function ensureInViewport(x: number, y: number) {
  const size = 52
  const pad = 8
  const maxX = Math.max(pad, window.innerWidth - size - pad)
  const maxY = Math.max(pad, window.innerHeight - size - pad)
  return { x: Math.min(maxX, Math.max(pad, x)), y: Math.min(maxY, Math.max(pad, y)) }
}
function setDefaultPos() {
  // 默认右上角（距离边缘 20px）
  const p = ensureInViewport(window.innerWidth - 52 - 20, 20)
  dragPos.x = p.x; dragPos.y = p.y
}
function onDragStart(e: MouseEvent) {
  if (showTopNav.value) return
  dragging.value = true
  offsetX = e.clientX - dragPos.x
  offsetY = e.clientY - dragPos.y
}
function onDragMove(e: MouseEvent) {
  if (!dragging.value) return
  const p = ensureInViewport(e.clientX - offsetX, e.clientY - offsetY)
  dragPos.x = p.x; dragPos.y = p.y
}
function onDragEnd() { dragging.value = false }

function toggleTopNav() {
  showTopNav.value = !showTopNav.value
  if (!showTopNav.value) setDefaultPos()
}

function onKey(e: KeyboardEvent) {
  if (e.ctrlKey && e.shiftKey && (e.key === 'N' || e.key === 'n')) {
    e.preventDefault(); toggleTopNav()
  }
}

onMounted(() => {
  setDefaultPos()
  window.addEventListener('keydown', onKey)
  window.addEventListener('mousemove', onDragMove)
  window.addEventListener('mouseup', onDragEnd)
  window.addEventListener('mouseleave', onDragEnd)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  window.removeEventListener('mousemove', onDragMove)
  window.removeEventListener('mouseup', onDragEnd)
  window.removeEventListener('mouseleave', onDragEnd)
})
</script>

<template>
  <div>
    <nav class="top-nav" v-show="showTopNav">
      <div class="nav-left">
        <span class="brand">智慧场馆配色示例</span>
      </div>
      <div class="nav-links">
        <router-link to="/login-a">方案A</router-link>
        <router-link to="/login-b">方案B</router-link>
        <router-link to="/login-c">方案C</router-link>
        <button class="nav-toggle" @click="toggleTopNav">隐藏导航</button>
      </div>
    </nav>
    <button
      v-show="!showTopNav"
      class="nav-toggle floating"
      :style="{ left: dragPos.x + 'px', top: dragPos.y + 'px' }"
      @click="toggleTopNav"
      @mousedown="onDragStart"
    >显示导航</button>
    <router-view />
  </div>
  
</template>

<style scoped>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 10;
  color: #e2e8f0;
  background: linear-gradient(180deg, rgba(3, 7, 18, 0.45), rgba(3, 7, 18, 0));
  backdrop-filter: blur(8px);
}
.nav-left .brand { font-weight: 600; }
.nav-left { display:flex; gap:12px; align-items: center; }
.nav-links { display: flex; gap: 12px; }
.nav-links a { color: #e2e8f0; text-decoration: none; padding: 4px 8px; border-radius: 6px; }
.nav-links a.router-link-active { background: rgba(255, 255, 255, 0.12); }

.nav-toggle {
  height: 30px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,.2);
  background: rgba(255,255,255,.12);
  color:#e2e8f0;
}
.nav-toggle.floating {
  position: fixed;
  width: 52px; height: 52px; border-radius: 50%;
  right: 20px; bottom: 20px;
  display:grid; place-items:center;
  background: linear-gradient(135deg,#3b82f6,#2563eb);
  color:#fff; border: none;
  box-shadow: 0 10px 24px rgba(37,99,235,.35);
  z-index: 20;
}
</style>
