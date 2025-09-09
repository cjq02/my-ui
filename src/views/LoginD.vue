<template>
  <div class="page">
    <!-- 页面中上方本地标题（与全局导航独立） -->
    <div class="page-title">
      <div class="brand-row">
        <div class="mark">国</div>
        <div class="gov-title">国家体育总局</div>
      </div>
    </div>
    <img class="bg-image" src="@/assets/img/login/login4-bg.png" alt="stadium background" />
    <div class="pic-box">
      <div class="pic">
        <img src="@/assets/img/login/login4-pic1.png"  />
      </div>
      <div class="pic">
        <img src="@/assets/img/login/login4-pic2.png"  />
      </div>
      <div class="pic">
        <img src="@/assets/img/login/login4-pic3.png"  />
      </div>
      <div class="pic">
        <img src="@/assets/img/login/login4-pic4.png"  />
      </div>
      <div class="pic">
        <img src="@/assets/img/login/login4-pic5.png"  />
      </div>

    </div>
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
//
async function onSubmit(){
  if(!form.username||!form.password) return alert('请输入用户名和密码')
  submitting.value = true
  await new Promise(r=>setTimeout(r,800))
  submitting.value = false
}
</script>

<style lang="scss" scoped>
.page {
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
  filter: blur(2px) brightness(0.62) saturate(1.1);
  opacity: .9;
}
.pic-box{
  position: absolute;
  display: flex;
  height: 130px;width:calc(100% - 60px);
  bottom:30px;
  padding:0 30px;
  .pic{
    padding: 0 20px;
    flex:1;
    height: 100%;
  }
  img{
    width:100% ;
    height: 100%;
    object-fit: cover;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.45);
    backdrop-filter: blur(10px);
    border-radius: 18px;
  }
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
    width: 100vw;
    height: 30vw;
    right: 0;
    bottom: -12vw;
    background: #3B82F6;
  }
}

.container {
  width: min(90vw, 920px);
  padding: 40px;
}

.card {
  margin: 0 auto;
  width: min(100%, 520px);
  background: rgba(255,255,255,.06);
  border: 1px solid rgba(255,255,255,.18);
  box-shadow: 0 24px 60px rgba(2,6,23,.45);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  padding: 28px 28px 24px;

  .header {
    text-align: center;
    margin-bottom: 14px;
    color: #E5E7EB;

    h1 {
      margin: 0 0 6px;
      font-size: 22px;
      color: #FFFFFF;
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
    color: #E2E8F0;
    font-size: 14px;
  }

  input {
    height: 42px;
    border-radius: 12px;
    padding: 0 12px;
    color: #0F172A;
    border: 1px solid rgba(148, 163, 184, .35);
    background: rgba(255,255,255,.96);
    outline: none;

    &:focus {
      border-color: #3B82F6;
      box-shadow: 0 0 0 4px rgba(59,130,246,.18);
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

</style>

