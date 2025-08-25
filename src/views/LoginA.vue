<template>
  <div class="page">
    <!-- 页面中上方本地标题（与全局导航独立） -->
    <div class="page-title">
      <div class="brand-row">
        <div class="mark">国</div>
        <div class="gov-title">国家体育总局</div>
      </div>
    </div>
    <img class="bg-image" src="@/assets/img/login/login-pic.png" alt="stadium background" />
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
import { reactive, ref } from 'vue'
interface LoginForm { username: string; password: string }
const form = reactive<LoginForm>({ username: '', password: '' })
const submitting = ref(false)
// 顶部标题已统一交由全局 top-nav 控制
async function onSubmit(){
  if(!form.username||!form.password) return alert('请输入用户名和密码')
  submitting.value = true
  await new Promise(r=>setTimeout(r,800))
  submitting.value = false
}
</script>

<style lang="scss" scoped>
.page { position: fixed; inset: 0; display: grid; place-items: center; background: radial-gradient(65% 65% at 50% 35%, #0B1B4A 0%, #0A1440 40%, #061233 100%); overflow: hidden; }
.page-title { position: absolute; top: 72px; left: 0; right: 0; display:flex; justify-content: center; z-index: 4; }
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

</style>

