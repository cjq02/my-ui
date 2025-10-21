<template>
<!--  支付登录-->
  <div class="login-page">
    <div class="title-container titles">
      <h3 class="title">
        <span>支付管理平台</span>
      </h3>
    </div>
    <div class="login-container" id="login-container">
      <div class="login-illustration">
        <div class="illustration">
          <img src="@/assets/img/login/internalControl/loginF/login-pic.png" alt="">
        </div>
      </div>
      <!-- 右侧登录区域 -->
      <div class="login-form  flex flex-col justify-center">
        <h2 class="text-2xl  mb-3 login-title">登&nbsp;&nbsp;录</h2>

        <form  class="space-y-6">
          <!-- 账号输入 -->
          <div>
            <label for="username" class="block text-lg font-medium text-gray-700 mb-1">系统账号/手机号码</label>
            <div class="relative">
              <input
                  type="text"
                  id="username"
                  v-model="username"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 "
                  placeholder="请输入账号"
                  required
              >
            </div>
          </div>

          <!-- 密码输入 -->
          <div>
            <div class="flex justify-between items-center mb-1">
              <label for="password" class="block text-lg font-medium text-gray-700">账号密码</label>
              <a href="#" class="text-sm text-blue-500 hover:text-blue-600 transition-colors">忘记密码</a>
            </div>
            <div class="relative">
              <input
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  v-model="password"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 "
                  placeholder="请输入密码"
                  required
              >

            </div>
          </div>

          <!-- 记住密码 -->
          <div class="flex items-center">
            <input
                type="checkbox"
                id="remember"
                v-model="rememberMe"
                class="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            >
            <label for="remember" class="ml-2 block text-sm text-gray-700">记住密码</label>
          </div>

          <!-- 登录按钮 -->
          <button
              type="submit"
              class="login-btn"
          >
            <span class="text-lg">进入系统</span>
          </button>
        </form>

      </div>
    </div>
    <div  class="login-bottom">Copyright © 九阶（厦门）信息科技有限公司</div>
  </div>
</template>

<script setup>
import { ref,onMounted,nextTick} from 'vue';

import jq from 'jquery'

const username = ref('admin');
const password = ref('test123456');
const showPassword = ref(false);
const rememberMe = ref(true);

onMounted( () => {
  nextTick(() => {
    setPageStyle()
  })
})
function setPageStyle() {
  const loginInfo = document.getElementById('login-container')
  const title = document.getElementsByClassName('titles')[0]
  const top = (jq(window).height() - jq(loginInfo).height()) / 2.5
  const titleTop = (top - jq(title).height()) / 2 + 60
  jq(title).css({ top: titleTop })
}
</script>

<style scoped>
.login-page {
  position: relative;
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
    background:  url('@/assets/img/login/internalControl/loginF/login-bg.png') center center no-repeat;

    background-size: cover;
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

.title-container {
  position: absolute;
  left: 50%;
  top:10%;
  height: 70px;
  transform: translate(-50%, 0);
  animation: fade-in-down 1s ease-out .2s both;

  .title {
    margin: 0 auto 10px;
    line-height: 80px;
    font-family: '微软雅黑', serif;
    font-weight: bold;
    font-size: 40px;
    color:#ffffff;
    letter-spacing: 5px;

    text-shadow:
        2px 2px 2px rgba(0, 0, 0, 0.3),
        4px 4px 4px rgba(0, 0, 0, 0.1);
  }

}
.login-container {
  margin-top:3%;
  width: 1100px;
  height: 480px;
  position: relative;
  display: flex;
  z-index: 1;
  background: url('@/assets/img/login/internalControl/loginF/login-pic-bg.png') top center no-repeat;
  background-size: 100% 100%;
  border-radius: 30px;

}

.login-form {
  width: 450px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #fff;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.login-title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
}

.logo {
  width: 36px;
  height: 32px;

}

.logo-title h1 {
  font-size: 28px;
  color: #333;
  letter-spacing: 10px;
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
  width: 100%;

  margin-top: 15px;
  padding: 12px;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s;
  background: linear-gradient(90deg, #2078fa 0%, #4eb3fc 99.95%);
  box-shadow: 0 4px 15px #3b82f666;


}

.login-btn:hover {
  background: linear-gradient(90deg, #4eb3fc 0%, #2078fa 99.95%);
}


.login-illustration {
  position: relative;
  flex:1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.illustration {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
@media screen and (max-width: 1440px)
{
  .title-container {
  }

}
</style>
