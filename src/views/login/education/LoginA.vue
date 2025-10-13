
<template>
  <div class="page">
    <!-- 页面中上方本地标题（与全局导航独立） -->
    <div class="page-title">
      <div class="brand-row">
        <div class="mark">内</div>
        <div class="gov-title">内控管理系统</div>
      </div>
    </div>
    <img class="bg-image" src="@/assets/img/login/internalControl/loginA-bg.jpg" alt="" />

    <div class="container">
      <form class="card" @submit.prevent="onSubmit">
        <header class="header">
          <h1>账号登录</h1>
        </header>

        <div class="field">
          <label for="user">用户名</label>
          <div class="input-wrapper">
            <svg class="input-icon" viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <input id="user" v-model.trim="form.username" placeholder="请输入用户名" />
          </div>
        </div>
        <div class="field">
          <label for="pass">密码</label>
          <div class="input-wrapper">
            <svg class="input-icon" viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"/>
            </svg>
            <input id="pass" type="password" v-model="form.password" placeholder="请输入密码" />
          </div>
        </div>
        <button class="btn" :disabled="submitting">{{ submitting ? '登录中...' : '登录' }}</button>
      </form>
    </div>
    <div class="login-bottom"><span>技术支持：九阶（北京）信息科技有限公司</span></div>
  </div>
</template>

<script setup lang="ts">import { reactive, ref } from 'vue'
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

<style lang="scss" scoped>.page {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background: radial-gradient(65% 65% at 50% 35%, #0B1B4A 0%, #0A1440 40%, #061233 100%);
  overflow: hidden;

  &-title {
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    display:flex;
    justify-content: center;
    z-index: 4;
  }

  &::before {
    content:"";
    position:absolute;
    inset:0;
    background: radial-gradient(55% 55% at 50% 40%, rgba(37,99,235,.25), rgba(37,99,235,0) 70%);
    pointer-events:none;
    z-index:1;
  }
}

.bg-image {
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit: cover;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: .30;

  &--1 {
    width: 42vw;
    height: 42vw;
    left: -12vw;
    top: -10vw;
    background: #2563EB;
  }

  &--2 {
    width: 36vw;
    height: 36vw;
    right: -10vw;
    bottom: -12vw;
    background: #3B82F6;
  }
}

.container {
  width: min(90vw, 920px);
  padding: 10px 40px 40px 40px;
}

.card {
  margin: 0 auto;
  width: min(100%, 400px);
  background: rgba(255,255,255,1);
  border: 1px solid rgba(255,255,255,.18);
  box-shadow: 0 24px 60px rgba(2,6,23,.45);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  padding: 28px 28px 24px;
  position: relative;
  z-index: 9;

  .header {
    text-align: center;
    margin-bottom: 14px;
    color: #E5E7EB;

    h1 {
      margin: 0 0 6px;
      font-size: 22px;
      color: #333;
    }

    p {
      margin: 0;
      font-size: 13px;
      color: #C7D2FE;
    }
  }
}

.brand-row {
  display:inline-flex;
  align-items: center;
  gap:12px;

  .mark {
    width:32px;
    height:32px;
    border-radius:50%;
    display:grid;
    place-items:center;
    background: linear-gradient(135deg,#3b82f6,#0ea5e9);
    color:#fff;
    font-weight:700;
    box-shadow: 0 2px 8px rgba(2,6,23,.35);
  }
}

.gov {
  &-title {
    color:#FFFFFF;
    font-size: 32px;
    font-weight: 800;
    letter-spacing: .5px;
    text-shadow: 0 2px 8px rgba(2,6,23,.4);
  }

  &-subtitle {
    color:#C7D2FE;
    font-size: 13px;
    margin:6px 0 2px;
  }
}

.badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(255,255,255,.14);
  font-size: 12px;
  margin-bottom: 6px;
}

.field {
  display: grid;
  gap: 8px;
  margin: 16px 0;

  label {
    color: #333;
    font-size: 16px;
  }

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .input-icon {
    position: absolute;
    left: 12px;
    color: #94a3b8;
    z-index: 1;
  }

  input {
    height: 42px;
    border-radius: 12px;
    padding: 0 12px 0 40px;
    color: #0F172A;
    border: 1px solid rgba(148, 163, 184, .8);
    background: rgba(255,255,255,.96);
    outline: none;
    font-size: 16px;
    transition: border-color .2s;
    flex:1;
    &:focus {
      border-color: #3B82F6;
    }
    &:-internal-autofill-selected {
      appearance: menulist-button;
      background-image: none !important;
      background-color: #ffffff !important;
      color: #333 !important;
    }
  }
}

.btn {
  width: 100%;
  height: 44px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,.25);
  background: linear-gradient(135deg, #2563EB, #1E40AF);
  color: #fff;
  box-shadow: 0 16px 32px rgba(37, 99, 235, .35);

  &:hover {
    background: linear-gradient(135deg, #1D4ED8, #1E3A8A);
  }

  &:disabled {
    opacity: .6;
  }
}
.login-bottom {
  position: absolute;
  bottom: 0;
  text-align: center;
  color: #fff;
  font-size: 14px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #0c3c70;
}
</style>
