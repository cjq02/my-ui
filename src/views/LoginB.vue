<template>
  <div class="shell">
    <header class="top">
      <div class="brand">
        <span class="mark">国</span>
        <h1>国家体育总局</h1>
        <span class="sub">国家体育总局信息中心 · 统一登录</span>
      </div>
    </header>
    <div class="body">
      <aside class="side"></aside>
      <main class="main">
        <form class="panel" @submit.prevent="onSubmit">
          <h2>登录</h2>
          <div class="f">
            <label for="u">用户名</label>
            <input id="u" v-model.trim="form.username" placeholder="用户名" />
          </div>
          <div class="f">
            <label for="p">密码</label>
            <input id="p" type="password" v-model="form.password" placeholder="密码" />
          </div>
          <button class="go" :disabled="submitting">{{ submitting ? '登录中...' : '进入' }}</button>
        </form>
      </main>
    </div>
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
.shell{ position:fixed; inset:0; display:flex; flex-direction:column; background:#f6fbff; }
.top{ height:64px; display:flex; align-items:center; padding:0 24px; background:linear-gradient(180deg, rgba(11,59,167,.9), rgba(11,59,167,.65)); color:#fff; }
.brand{ display:flex; align-items:center; gap:10px; }
.mark{ width:28px; height:28px; border-radius:50%; display:grid; place-items:center; background:linear-gradient(135deg,#3b82f6,#0ea5e9); font-weight:700; }
.brand h1{ margin:0; font-size:22px; }
.brand .sub{ margin-left:10px; opacity:.9; font-size:13px; }

.body{ flex:1; display:grid; grid-template-columns: 40% 60%; }
.side{ background: linear-gradient(160deg, #0b3ba7, #2563eb 45%, #0ea5e9); position:relative; }
.side::after{ content:""; position:absolute; inset:0; background-image: radial-gradient(circle at 30% 30%, rgba(255,255,255,.2), transparent 40%); pointer-events:none; }

.main{ display:grid; place-items:center; }
.panel{ width:min(92%,420px); background:#fff; border:1px solid #e5eef7; border-radius:14px; padding:28px; box-shadow:0 10px 30px rgba(2,6,23,.08); }
.panel h2{ margin:0 0 16px; color:#0b1220; font-size:20px; }
.f{ display:grid; gap:8px; margin:14px 0; }
.f label{ color:#334155; font-size:14px; }
.f input{ height:40px; border-radius:10px; border:1px solid #cfe3ff; padding:0 12px; outline:none; }
.f input:focus{ border-color:#3b82f6; box-shadow:0 0 0 4px rgba(59,130,246,.16); }
.go{ width:100%; height:42px; border-radius:10px; color:#fff; background:linear-gradient(135deg,#3B82F6,#0EA5E9); box-shadow:0 12px 22px rgba(37,99,235,.25); }
.go:hover{ background:linear-gradient(135deg,#2563EB,#0EA5E9); }
</style>

