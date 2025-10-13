<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-form">
        <div class="logo-title">
          <!-- 这里可以替换为实际的logo图片 -->
          <div class="logo">
            <img class="bg-image" src="@/assets/img/login/internalControl/loginB-logo.png"  />
          </div>
          <h1>智能合同管控系统</h1>
        </div>
        <div class="form-group">
          <label for="username">用户名：</label>
          <input
              id="username"
              type="text"
              v-model="username"
              placeholder="用户名"
          />
        </div>
        <div class="form-group">
          <label for="password">密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
          <input
              id="password"
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
    <div  class="login-bottom">Copyright © 九阶（厦门）信息科技有限公司</div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: url('@/assets/img/login/internalControl/loginB-bg.png') top center no-repeat;
    background-size: cover;
    filter: blur(1.5px) brightness(1) contrast(1) hue-rotate(0deg);
    content: "";
  }
  &:after {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg,#43507e4d,#43507e99);
    content: "";
  }
}

.login-container {
  width: 1000px;
  height: 400px;
  position: relative;
  top:-5%;
  display: flex;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 1;
}

.login-form {
  flex:1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.logo-title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
  justify-content: center;
}

.logo {
  width: 36px;
  height: 32px;

}

.logo-title h1 {
  font-size: 22px;
  color: #333;
}
.form-group {
  display: flex;
  align-items: center;
}
.form-group input {
  flex:1;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  font-size: 14px;
}
.form-group label {
  white-space: nowrap;
  margin-right: 10px;
  width: 60px;
}
.login-btn {
  margin-top:15px;
  padding: 12px;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
  background: linear-gradient(135deg,#1e40af,#3b82f6);
  box-shadow: 0 4px 15px #3b82f666;

}

.login-btn:hover {
  background: linear-gradient(to right, #2b68c0, #00b0e6);
}


.login-illustration {
  width:500px;
  background-color: #e6f7ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.illustration {
  width: 100%;
  height: 100%;
  background: url('@/assets/img/login/internalControl/loginB-pic.png') no-repeat center;
  background-size: cover;
}

.ai-tag {
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: #fff;
  font-size: 14px;
}
.login-bottom {
  position: absolute;
  left:0;
  bottom: 15px;
  padding-bottom: 10px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  z-index: 2;
}
</style>
