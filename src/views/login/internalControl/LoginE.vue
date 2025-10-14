<template>
  <div class="login-page">
    <div class="login-container">
      <div class="min-h-screen  flex items-center justify-center p-4">

        <!-- 主容器 -->
        <div class="w-full max-w-5xl   login-inner">
          <p class="text-2xl font-bold text-gray-800 login-title">精益运营数字化平台</p>
          <div class="grid md:grid-cols-2 gap-0">
            <!-- 左侧欢迎区域 -->
            <div class="login-pic p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">

              <!-- 欢迎文本 -->
              <div class="relative z-10">

                <!-- 3D插图区域 -->
                <div class="relative w-full ">

                  <img src="@/assets/img/login/internalControl/loginE/login-pic.png"  class="bg-image w-full h-full object-contain" loading="lazy"/>
                </div>
              </div>
            </div>

            <!-- 右侧登录区域 -->
            <div class="login-form  p-8 md:p-12 flex flex-col justify-center">
              <h2 class="text-2xl font-bold text-gray-800 mb-8">登&nbsp;&nbsp;录</h2>

              <form  class="space-y-6">
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

</script>

<style scoped>
/* 基础动画效果 */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* 为插图添加浮动动画 */
img {
  //animation: float 6s ease-in-out infinite;
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
    background: url('@/assets/img/login/internalControl/loginE/login-bg.png') top center no-repeat;
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
position: relative;
  z-index: 2;
  opacity: 1;
  //background: rgba(239, 246, 255, 1) url('@/assets/img/login/internalControl/loginE/login-pic-bg.png') top center no-repeat;
  //background-size: cover;
  background-color: rgba(239, 246, 255, 1);
  border-radius: 20px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1), 0px 17px 36px rgba(0,0, 90, 0.25);
  box-sizing: border-box;
  border-image: linear-gradient(255.15deg, rgba(180, 210, 255, 1) 0%, rgba(255, 255, 255, 0) 100%) 2;
}

.login-form{
  padding:20px 40px 30px 40px;
  opacity: 1;
  border-radius: 0px 30px 30px 0px;
  background: #ffffff;

}
.login-pic{
  padding:0
}
.login-title{
  position: absolute;
  left:0;
  width: 100%;
  text-align: center;
  top: -100px;
  height: 70px;
  animation: fade-in-down 1s ease-out .2s both;
color: #ffffff;
  font-size: 40px;
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
</style>
