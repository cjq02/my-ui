<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-form">
        <div class="logo-title">
          <!-- 这里可以替换为实际的logo图片 -->
          <div class="logo"></div>
          <h1>内控管理系统</h1>
        </div>
        <div class="form-group">
          <input
              type="text"
              v-model="username"
              placeholder="用户名"
          />
        </div>
        <div class="form-group">
          <input
              type="password"
              v-model="password"
              placeholder="密码"
          />
        </div>
        <button class="login-btn" @click="handleLogin">登录</button>
      </div>
      <div class="login-illustration">
        <!-- 这里可以替换为实际的插画图片 -->
        <div class="illustration"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const handleLogin = () => {
  console.log('用户名:', username.value, '密码:', password.value);
  // 实际项目中，可在此处添加调用登录接口等逻辑
};
</script>

<style scoped>
.login-page {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #3a7bd5, #00d2ff);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.login-container {
  display: flex;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.login-form {
  width: 350px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.logo-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.logo {
  width: 30px;
  height: 30px;
  background: linear-gradient(to bottom, #3a7bd5, #00d2ff);
  border-radius: 4px;
}

.logo-title h1 {
  font-size: 22px;
  color: #333;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
}

.login-btn {
  padding: 12px;
  background: linear-gradient(to right, #3a7bd5, #00d2ff);
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
}

.login-btn:hover {
  background: linear-gradient(to right, #2b68c0, #00b0e6);
}

.login-illustration {
  width: 500px;
  background-color: #e6f7ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.illustration {
  width: 400px;
  height: 300px;
  background: url('@/assets/img/login/internalControl/loginA-bg.jpg') no-repeat center;
  background-size: contain;
}

.ai-tag {
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: #fff;
  font-size: 14px;
}
</style>
