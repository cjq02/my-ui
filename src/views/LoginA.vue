<template>
  <div class="page">
    <header class="top" v-if="showHeader">
      <div class="brand-row">
        <div class="mark">国</div>
        <div class="gov-title">国家体育总局</div>
      </div>
    </header>
    <img class="bg-image" src="@/assets/img/login1/login-pic.png" alt="stadium background" />
    <div class="orb orb--1"></div>
    <div class="orb orb--2"></div>
    <div class="container">
      <form class="card" @submit.prevent="onSubmit">
        <header class="header">
          <h1>账号登录</h1>
        </header>

        <div class="field">
          <label for="user">用户名</label>
          <input id="user" v-model.trim="form.username" placeholder="请输入用户名" />
        </div>
        <div class="field">
          <label for="pass">密码</label>
          <input id="pass" type="password" v-model="form.password" placeholder="请输入密码" />
        </div>
        <button class="btn" :disabled="submitting">{{ submitting ? '登录中...' : '登录' }}</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue'
interface LoginForm { username: string; password: string }
const form = reactive<LoginForm>({ username: '', password: '' })
const submitting = ref(false)
const showHeader = ref(true)

// 拖动按钮位置与逻辑（仅在隐藏时生效）
const dragPos = reactive({ x: 0, y: 0 })
const dragging = ref(false)
let offsetX = 0
let offsetY = 0

function ensureInViewport(x: number, y: number) {
  const btnSize = 52
  const padding = 8
  const maxX = Math.max(padding, window.innerWidth - btnSize - padding)
  const maxY = Math.max(padding, window.innerHeight - btnSize - padding)
  return {
    x: Math.min(maxX, Math.max(padding, x)),
    y: Math.min(maxY, Math.max(padding, y)),
  }
}

function setDefaultPos() {
  const pos = ensureInViewport(window.innerWidth - 52 - 20, window.innerHeight - 52 - 20)
  dragPos.x = pos.x
  dragPos.y = pos.y
}

function onDragStart(e: MouseEvent) {
  if (showHeader.value) return
  dragging.value = true
  offsetX = e.clientX - dragPos.x
  offsetY = e.clientY - dragPos.y
}

function onDragMove(e: MouseEvent) {
  if (!dragging.value) return
  const pos = ensureInViewport(e.clientX - offsetX, e.clientY - offsetY)
  dragPos.x = pos.x
  dragPos.y = pos.y
}

function onDragEnd() {
  dragging.value = false
}

function toggleHeader() {
  showHeader.value = !showHeader.value
  if (!showHeader.value) setDefaultPos()
}

onMounted(() => {
  setDefaultPos()
  window.addEventListener('mousemove', onDragMove)
  window.addEventListener('mouseup', onDragEnd)
  window.addEventListener('mouseleave', onDragEnd)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onDragMove)
  window.removeEventListener('mouseup', onDragEnd)
  window.removeEventListener('mouseleave', onDragEnd)
})
async function onSubmit(){
  if(!form.username||!form.password) return alert('请输入用户名和密码')
  submitting.value = true
  await new Promise(r=>setTimeout(r,800))
  submitting.value = false
}
</script>

<style lang="scss" scoped>
.page { position: fixed; inset: 0; display: grid; place-items: center; background: radial-gradient(65% 65% at 50% 35%, #0B1B4A 0%, #0A1440 40%, #061233 100%); overflow: hidden; }
.top { position: fixed; top:0; left:0; right:0; height: 72px; display:flex; align-items:center; padding:0 24px; color:#fff; background: linear-gradient(180deg, rgba(6,18,51,.75), rgba(6,18,51,.15)); backdrop-filter: blur(6px); z-index:5; box-shadow: 0 6px 18px rgba(2,6,23,.28); }
.bg-image { position:absolute; inset:0; width:100%; height:100%; object-fit: cover; filter: blur(16px) brightness(0.55); opacity: .55; }
.orb { position: absolute; border-radius: 50%; filter: blur(90px); opacity: .35; }
.orb--1 { width: 42vw; height: 42vw; left: -12vw; top: -10vw; background: #1D4ED8; }
.orb--2 { width: 36vw; height: 36vw; right: -10vw; bottom: -12vw; background: #06B6D4; }
.container { width: min(90vw, 920px); padding: 40px; }
.card { margin: 0 auto; width: min(100%, 520px); background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.18); box-shadow: 0 24px 60px rgba(2,6,23,.45); backdrop-filter: blur(10px); border-radius: 18px; padding: 28px 28px 24px; }
.header { text-align: center; margin-bottom: 14px; color: #E5E7EB; }
.brand-row { display:inline-flex; align-items: center; gap:12px; }
.mark { width:32px; height:32px; border-radius:50%; display:grid; place-items:center; background: linear-gradient(135deg,#3b82f6,#0ea5e9); color:#fff; font-weight:700; box-shadow: 0 2px 8px rgba(2,6,23,.35); }
.gov-title { color:#FFFFFF; font-size: 32px; font-weight: 800; letter-spacing: .5px; text-shadow: 0 2px 8px rgba(2,6,23,.4); }
.gov-subtitle { color:#C7D2FE; font-size: 13px; margin:6px 0 2px; }
.badge { display: inline-block; padding: 2px 8px; border-radius: 999px; background: rgba(255,255,255,.14); font-size: 12px; margin-bottom: 6px; }
.header h1 { margin: 0 0 6px; font-size: 22px; color: #FFFFFF; }
.header p { margin: 0; font-size: 13px; color: #C7D2FE; }
.field { display: grid; gap: 8px; margin: 16px 0; }
.field label { color: #E2E8F0; font-size: 14px; }
.field input { height: 42px; border-radius: 12px; padding: 0 12px; color: #0F172A; border: 1px solid rgba(148, 163, 184, .35); background: rgba(255,255,255,.96); outline: none; }
.field input:focus { border-color: #3B82F6; box-shadow: 0 0 0 4px rgba(59,130,246,.18); }
.btn { width: 100%; height: 44px; border-radius: 12px; border: 1px solid rgba(255,255,255,.25); background: linear-gradient(135deg, #2563EB, #1E40AF); color: #fff; box-shadow: 0 16px 32px rgba(37, 99, 235, .35); }
.btn:hover { background: linear-gradient(135deg, #1D4ED8, #1E3A8A); }
.btn:disabled { opacity: .6; }

/* 显隐控制按钮样式 */
.toggle-btn {
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,.35);
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
  box-shadow: 0 10px 24px rgba(37,99,235,.35);
  z-index: 6;
}
.toggle-btn.floating {
  position: fixed;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  padding: 0;
}
</style>

