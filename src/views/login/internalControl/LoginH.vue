<template>
  <div class="login-container">
    <div class="title-container">精益运营数字化平台</div>
    <div class="login-card">
      <h2>登&nbsp;&nbsp;&nbsp;录</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label class="login-icon">
            <svg class="input-icon" viewBox="0 0 24 24" width="30" height="30">
              <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </label>
          <input
              type="text"
              id="username"
              v-model="username"
              placeholder="请输入您的账号"
              required
          />
        </div>
        <div class="form-group">
          <label class="login-icon">
            <svg class="input-icon" viewBox="0 0 24 24" width="30" height="30">
              <path fill="currentColor" d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"/>
            </svg>
          </label>
          <input
              type="password"
              id="password"
              v-model="password"
              placeholder="请输入您的密码"
              required
          />
        </div>
        <div class="remember-forget">
          <label>
            <input type="checkbox" v-model="rememberMe" /> 记住密码
          </label>
          <a href="#" @click.prevent="handleForgetPassword">忘记密码？</a>
        </div>
        <button type="submit" class="login-btn">进入系统</button>
      </form>
    </div>

    <div  class="login-bottom">Copyright © 九阶（厦门）信息科技有限公司</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const rememberMe = ref(false);

const handleLogin = () => {
  // 这里可以添加登录逻辑，比如调用接口验证账号密码
  console.log('登录：', username.value, password.value);
  // 实际项目中，验证通过后可以进行路由跳转等操作
};

const handleForgetPassword = () => {
  // 忘记密码的逻辑，比如跳转到忘记密码页面
  console.log('忘记密码');
};
</script>

<style lang="scss" scoped>
.login-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 65%;

    background: url('@/assets/img/login/internalControl/loginH/login-bg.png') top center no-repeat;
    background-size: cover;
  }
}
 .title-container{
  position: absolute;
  left: 0;
  top: 18%;
   width: 100%;
   text-align: center;
  z-index: 1;
   animation: fade-in-down 1s ease-out .2s both;
   color: #ffffff;
   font-size: 45px;
   font-weight: bold;
   letter-spacing: 3px;
}
.login-card {
  position: relative;
  margin-top:10%;
  background-color: rgba(255, 255, 255,1);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 15px 39.56px 3.44px rgba(63, 77, 100, 0.22);
  width: 500px;



}

.login-card h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 24px;
  color: #333;
}

.login-card p {
  text-align: center;
  margin-bottom: 20px;
  color: #666;
}

.form-group {
  display: flex;
  margin-bottom: 25px;
}

.form-group label {
  background-color: #1e4365;
  width: 46px;
  height: 46px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-group input {
 flex:1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.remember-forget {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-size: 14px;
  color: #666;
}

.remember-forget a {
  color: #1d4264;
  text-decoration: none;
}

.remember-forget a:hover {
  text-decoration: underline;
}

.login-btn {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg,#385d7f,#1d4264);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.login-btn:hover {
  background: linear-gradient(135deg,#1d4264,#0B1B4A);
}
.login-bottom {
  position: absolute;
  left:0;
  bottom: 15px;
  padding-bottom: 10px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #1d4264;
}
</style>
