<template>
  <div class="b2">
    <aside class="b2-left">
      <img class="cover" src="@/assets/img/login/sports/login-pic3.png" alt="illustration" />
    </aside>
    <main class="b2-right">
      <div class="head">
        <div class="badge">国</div>
        <div class="texts">
          <h1>国家体育总局</h1>
          <p>国家体育总局信息中心 · 统一登录</p>
        </div>
      </div>
      <form class="pane" @submit.prevent="onSubmit">
        <h2>账号登录</h2>
        <div class="rowV">
          <label for="u">用户名</label>
          <input id="u" v-model.trim="form.username" placeholder="请输入用户名" />
        </div>
        <div class="rowV">
          <label for="p">密码</label>
          <input id="p" type="password" v-model="form.password" placeholder="请输入密码" />
        </div>
        <button class="act" :disabled="submitting">{{ submitting ? '登录中...' : '登录' }}</button>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
interface LoginForm { username: string; password: string }
const form = reactive<LoginForm>({ username: '', password: '' })
const submitting = ref(false)
async function onSubmit(){
  if(!form.username||!form.password) return alert('请输入用户名和密码')
  submitting.value = true
  await new Promise(r=>setTimeout(r,800))
  submitting.value = false
}
</script>

<style scoped lang="scss">
.b2{ position:fixed; inset:0; display:grid; grid-template-columns: 58% 42%; background: radial-gradient(60% 60% at 50% 40%, #0b3ba7 0%, #0e2a78 60%, #0b1b4a 100%); }
.b2-left{ position:relative; }
.cover{ position:absolute; inset:0; width:100%; height:100%; object-fit: cover; }
.b2-left::after{ content:""; position:absolute; inset:0; background: radial-gradient(60% 60% at 30% 40%, rgba(11,59,167,.25), rgba(11,59,167,0) 70%); pointer-events:none; }
.b2-right{ position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; background:#ffffff; padding: 24px 40px; }
.head{ position:absolute; top: 12%; left: 50%; transform: translateX(-50%); display:flex; align-items:center; gap:12px; }
.texts{ text-align: center; }
.texts h1{ margin:0; font-size:28px; }
.texts p{ margin:0; color:#475569; }
.badge{ width:32px; height:32px; border-radius:50%; display:inline-grid; place-items:center; background:linear-gradient(135deg,#3b82f6,#0ea5e9); font-weight:700; }
.brand h1{ margin:8px 0 6px; font-size:26px; }
.brand p{ margin:0; opacity:.9 }
.illu-card{ width:100%; max-width:700px; padding:16px; border-radius:16px; background: rgba(255,255,255,.10); border:1px solid rgba(255,255,255,.22); backdrop-filter: blur(6px); box-shadow:0 24px 60px rgba(2,6,23,.45); }
.illu{ width:100%; height:auto; display:block; border-radius:12px; filter: saturate(1.05) hue-rotate(-8deg); }

.pane{ width:min(92%,520px); background:#fff; border:1px solid #e5eef7; border-radius:12px; padding:18px; box-shadow:0 18px 48px rgba(2,6,23,.18), 0 6px 16px rgba(2,6,23,.10); box-sizing: border-box; }
.title{ width:100%; display:flex; align-items:center; gap:12px; margin-bottom:8px; }
.pane h2{ margin:0 0 10px; color:#0b1220; font-size:20px; }
.rowV{ display:grid; gap:8px; margin:8px 0; }
.rowV label{ color:#334155; font-size:14px; }
.rowV input{ width:100%; display:block; height:38px; border-radius:10px; border:1px solid #cfe3ff; padding:0 12px; outline:none; box-sizing: border-box; }
.act{ height:38px; border-radius:10px; border:1px solid #cfe3ff; background:linear-gradient(135deg,#3B82F6,#0EA5E9); box-shadow:0 8px 18px rgba(37,99,235,.2); margin-top:10px; }
.pane input{ width:100%; }
.pane input:focus{ border-color:#3b82f6; box-shadow:0 0 0 4px rgba(59,130,246,.16); }
.act{ width:100%; height:38px; border-radius:10px; color:#fff; background:linear-gradient(135deg,#3B82F6,#0EA5E9); box-shadow:0 8px 18px rgba(37,99,235,.2); margin-top:10px; }
.act:hover{ background:linear-gradient(135deg,#2563EB,#0EA5E9); }

@media (max-width: 960px){
  .b2{ grid-template-columns: 1fr; }
  .b2-right{ padding:18px 0 28px; }
}
</style>

