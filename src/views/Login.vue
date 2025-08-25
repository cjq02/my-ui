<template>
  <div class="login-page">
    <div class="decor-grid"></div>
    <div class="decor-glow decor-glow--tl"></div>
    <div class="decor-glow decor-glow--br"></div>

    <div class="login-layout">
      <section class="brand-panel">
        <header class="brand-header">
          <div class="logo-circle">AI</div>
          <div class="brand-text">
            <h1>国家体育总局</h1>
          </div>
        </header>

        <div class="brand-visual">
          <img class="brand-illustration" src="@/assets/img/login1/login-pic.png" alt="智慧场馆插画" />
        </div>
      </section>

      <section class="form-panel">
        <form class="login-card" @submit.prevent="onSubmit">
          <h2>账号登录</h2>
          <p class="subtitle">欢迎使用智慧场馆统一登录</p>

          <div class="form-item">
            <label for="username">用户名</label>
            <input id="username" v-model.trim="form.username" type="text" placeholder="请输入用户名" />
          </div>
          <div class="form-item">
            <label for="password">密码</label>
            <input id="password" v-model="form.password" type="password" placeholder="请输入密码" />
          </div>

          <div class="form-actions">
            <label class="remember">
              <input type="checkbox" v-model="remember" /> 记住我
            </label>
            <a class="link" href="javascript:void(0)">忘记密码？</a>
          </div>

          <button class="submit-btn" type="submit" :disabled="submitting">{{ submitting ? '登录中...' : '登录' }}</button>
        </form>
      </section>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

interface LoginForm {
  username: string
  password: string
}

const form = reactive<LoginForm>({
  username: '',
  password: ''
})

const submitting = ref(false)
const remember = ref(false)

async function onSubmit() {
  if (!form.username || !form.password) return alert('请输入用户名和密码')
  try {
    submitting.value = true
    // 模拟请求
    await new Promise((resolve) => setTimeout(resolve, 800))
    alert(`欢迎，${form.username}`)
  } finally {
    submitting.value = false
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 蓝色主题背景（Web 端） */
  background: linear-gradient(135deg, #0b3ba7 0%, #1d4ed8 40%, #0ea5e9 100%);
  overflow: hidden;
}

.decor-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px);
  background-size: 28px 28px, 28px 28px;
  pointer-events: none;
}

.decor-glow {
  position: absolute;
  width: 40vw;
  height: 40vw;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.35;
  pointer-events: none;
}
.decor-glow--tl {
  top: -10vw;
  left: -10vw;
  background: radial-gradient(closest-side, #60a5fa, transparent);
}
.decor-glow--br {
  right: -10vw;
  bottom: -10vw;
  background: radial-gradient(closest-side, #0ea5e9, transparent);
}

.login-layout {
  /* 以 16:9 比例自适应视窗，优先不超出高度 */
  width: min(92vw, calc(92vh * (16 / 9)));
  aspect-ratio: 16 / 9;
  height: auto;
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 32px;
  padding: 32px;
  position: relative;
  z-index: 1;
}

.brand-panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 18px 40px rgba(13, 70, 160, 0.28);
  backdrop-filter: blur(8px);
}

.brand-header {
  display: flex;
  align-items: center;
  gap: 14px;
}
.logo-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #0ea5e9);
  display: grid;
  place-items: center;
  font-weight: 700;
}
.brand-text h1 {
  margin: 0 0 4px;
  font-size: 22px;
}
.brand-text p {
  margin: 0;
  font-size: 13px;
  opacity: 0.85;
}

.brand-visual {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.brand-svg {
  width: 100%;
  max-width: 760px;
  height: auto;
}
.brand-illustration {
  width: 100%;
  max-width: 760px;
  height: auto;
  display: block;
}

.feature-list {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  padding: 0;
  margin: 8px 0 0;
  list-style: none;
}
.feature-list li {
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  font-size: 12px;
}

.form-panel {
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-card {
  width: 100%;
  max-width: 420px;
  padding: 28px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.28);
  border: 1px solid rgba(255, 255, 255, 0.45);
  box-shadow: 0 18px 40px rgba(13, 70, 160, 0.30);
  backdrop-filter: blur(8px);
}

h2 {
  margin: 0 0 8px;
}
.subtitle {
  margin: 0 0 18px;
  font-size: 13px;
  opacity: 0.85;
}

h1 {
  margin: 0 0 18px;
  font-size: 22px;
}

.form-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;

  label {
    font-size: 14px;
  }

  input {
    height: 38px;
    padding: 0 12px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(0, 10, 40, 0.15);
    color: inherit;
    outline: none;

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.35);
    }
  }
}

.form-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 13px;
}
.remember {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.link {
  color: #93c5fd;
  text-decoration: none;
}
.link:hover {
  color: #bfdbfe;
}

.submit-btn {
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid transparent;
  background: #2563eb;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: #1d4ed8;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

@media (max-width: 1024px) {
  .login-layout {
    width: min(96vw, calc(96vh * (16 / 9)));
    padding: 20px;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .brand-panel {
    order: 2;
  }
  .form-panel {
    order: 1;
  }
}
</style>
