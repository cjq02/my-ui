<template>
  <div class="login-page">
    <div class="login-container">
      <div class="min-h-screen  flex items-center justify-center p-4">

        <div class="login-title">
          <span>采购系统管理平台</span>
        </div>
        <!-- 主容器 -->
        <div class="w-full max-w-2xl login-inner">
          <div class="grid md:grid-cols-1 gap-0">


            <!-- 右侧登录区域 -->
            <div class="login-form  p-8 md:p-12 flex flex-col justify-center">
              <h2 class="text-2xl font-bold text-gray-800 mb-8">登&nbsp;&nbsp;录</h2>

              <form @submit.prevent="handleLogin" class="space-y-6">
                <!-- 账号输入 -->
                <div>
                  <label for="username" class="block text-sm font-medium text-gray-700 mb-1">系统账号/手机号码</label>
                  <div class="relative">
                    <input
                        type="text"
                        id="username"
                        v-model="username"
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        placeholder="请输入账号"
                        required
                    >
                  </div>
                </div>

                <!-- 密码输入 -->
                <div>
                  <div class="flex justify-between items-center mb-1">
                    <label for="password" class="block text-sm font-medium text-gray-700">账号密码</label>
                    <a href="#" class="text-sm text-blue-600 hover:text-blue-800 transition-colors">忘记密码</a>
                  </div>
                  <div class="relative">
                    <input
                        :type="showPassword ? 'text' : 'password'"
                        id="password"
                        v-model="password"
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
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
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  登录
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
      <div  class="login-bottom">Copyright © 九阶（厦门）信息科技有限公司</div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

// 表单数据
const username = ref('admin');
const password = ref('test123456');
const showPassword = ref(false);
const rememberMe = ref(true);

// 登录处理
const handleLogin = () => {
  // 这里添加登录逻辑
  console.log('登录信息:', {
    username: username.value,
    password: password.value,
    rememberMe: rememberMe.value
  });

  // 实际应用中应该调用API进行登录验证
  alert('登录功能将在这里实现');
};
</script>

<style scoped>
/* 基础动画效果 */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* 为插图添加浮动动画 */
img {
  animation: float 6s ease-in-out infinite;
}

.login-page {
  width: 100vw;
  height: 100vh;
  position: relative;

  &:before {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background: url('@/assets/img/login/internalControl/loginB/login-bg.jpg') top center no-repeat;
    background-size: cover;
    content: "";
  }
}
.login-container {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.login-inner{
  position: absolute;
  right: 12%;
  z-index: 2;
  opacity: 1;
  background: rgba(239, 246, 255, 1) url('@/assets/img/login/education/loginA/login-pic-bg.png') top center no-repeat;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1), 0px 17px 36px rgba(0,0, 90, 0.25);
  box-sizing: border-box;
  border-image: linear-gradient(255.15deg, rgba(180, 210, 255, 1) 0%, rgba(255, 255, 255, 0) 100%) 2;

  width: 500px;
}

.login-form{
  padding:20px 40px 30px 40px;
  opacity: 1;
  border-radius: 30px;
  background: #ffffff;

}
.login-pic{
  padding:20px 40px 20px 40px;
}
.login-title{

  position: absolute;
  left: 5%;
  top: 10%;
  z-index: 1;
  text-align: center;
  animation: fade-in-down 1s ease-out .2s both;

  span {
    margin: 0 auto 10px;
    line-height: 80px;
    font-weight: bold;
    font-size: 46px;
    letter-spacing: 3px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei, sans-serif;
    color: #ffffff;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3), 4px 4px 4px rgba(0, 0, 0, 0.1);

  }
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
}

@media screen and (max-width: 1440px) {
  .login-title {
    span{
      line-height: 55px;
      font-size: 42px;
    }
    }
  .login-inner{
    right:7%;
    width: 450px;
  }
    .login-form {
      padding: 20px 7% 15px;
    }
}
</style>
