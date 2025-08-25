<template>
  <div class="b2">
    <aside class="b2-left">
      <div class="brand">
        <div class="badge">国</div>
        <h1>国家体育总局</h1>
        <p>国家体育总局信息中心 · 统一登录</p>
      </div>
      <img class="illu" src="@/assets/img/login/login-pic.png" alt="illustration" />
    </aside>
    <main class="b2-right">
      <form class="pane" @submit.prevent="onSubmit">
        <h2>账号登录</h2>
        <label class="lab" for="u">用户名</label>
        <input id="u" v-model.trim="form.username" placeholder="请输入用户名" />
        <label class="lab" for="p">密码</label>
        <input id="p" type="password" v-model="form.password" placeholder="请输入密码" />
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
.b2{ position:fixed; inset:0; display:grid; grid-template-columns: 52% 48%; background: radial-gradient(60% 60% at 50% 40%, #0b3ba7 0%, #0e2a78 60%, #0b1b4a 100%); }
.b2-left{ position:relative; display:flex; flex-direction:column; justify-content:center; align-items:center; padding:40px; color:#e6f0ff; }
.b2-left::before{ content:""; position:absolute; inset:0; background-image: radial-gradient(circle at 30% 30%, rgba(255,255,255,.2), transparent 40%); pointer-events:none; }
.brand{ text-align:center; margin-bottom:10px; }
.badge{ width:32px; height:32px; border-radius:50%; display:inline-grid; place-items:center; background:linear-gradient(135deg,#3b82f6,#0ea5e9); font-weight:700; }
.brand h1{ margin:8px 0 6px; font-size:26px; }
.brand p{ margin:0; opacity:.9 }
.illu{ width:100%; max-width:640px; height:auto; border-radius:14px; box-shadow:0 24px 60px rgba(2,6,23,.45); }

.b2-right{ display:grid; place-items:center; background:#f6fbff; }
.pane{ width:min(92%,420px); background:#fff; border:1px solid #e5eef7; border-radius:14px; padding:28px; box-shadow:0 10px 30px rgba(2,6,23,.08); }
.pane h2{ margin:0 0 16px; color:#0b1220; font-size:20px; }
.lab{ display:block; margin:10px 0 6px; color:#334155; font-size:14px; }
.pane input{ width:100%; height:40px; border-radius:10px; border:1px solid #cfe3ff; padding:0 12px; outline:none; }
.pane input:focus{ border-color:#3b82f6; box-shadow:0 0 0 4px rgba(59,130,246,.16); }
.act{ width:100%; height:42px; border-radius:10px; color:#fff; background:linear-gradient(135deg,#3B82F6,#0EA5E9); box-shadow:0 12px 22px rgba(37,99,235,.25); margin-top:14px; }
.act:hover{ background:linear-gradient(135deg,#2563EB,#0EA5E9); }

@media (max-width: 960px){
  .b2{ grid-template-columns: 1fr; }
  .b2-right{ padding:18px 0 28px; }
}
</style>

