<template>
  <div class="login-page">
    <div class="title-container titles">
      <div class="logo">
        <img class="bg-image" src="@/assets/img/login/education/loginA/logo.png"  />
      </div>
      <div class="title">
        <span>高校内部控制化数字平台</span>
      </div>
    </div>
    <div class="login-container" id="login-container">
      <div class="min-h-screen  flex items-center justify-center p-4">

        <!-- 主容器 -->
        <div class="w-full max-w-5xl  login-inner flex">

            <!-- 左侧欢迎区域 -->
            <div class="login-pic p-8 md:p-12  flex-1  relative">


            </div>

            <!-- 右侧登录区域 -->
            <div class="login-form  p-8 md:p-12 flex flex-col justify-center">
              <h2 class="text-2xl font-bold text-gray-800 mb-8">登&nbsp;&nbsp;录</h2>

              <form class="space-y-6">
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
                <el-button
                    class="login-btn"
                    type="primary"
                    style="width: 100%"
                >
                  登录
                </el-button>
              </form>

            </div>

        </div>
      </div>
      <div  class="login-bottom">Copyright © 九阶（厦门）信息科技有限公司</div>

    </div>
    <div class="bottomBgc"></div>
  </div>
</template>

<script setup>
import { ref ,onMounted,nextTick} from 'vue';
import jq from 'jquery'

// 表单数据
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
  const titleTop = (top - jq(title).height()) / 2 + 80
  jq(title).css({ top: titleTop })
}
</script>

<style lang="scss" scoped>
/* 基础动画效果 */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}



.login-page {
  width: 100vw;
  height: 100vh;
  position: relative;

}
.login-container {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.login-inner{
  position: relative;
  width: 1050px;
  height: 450px;
  z-index: 2;
  opacity: 1;
  background: #ffffff url('@/assets/img/login/education/loginA/login-pic.png') 20px center no-repeat;
  background-size: contain;
  border-radius: 20px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1), 0px 17px 36px rgba(0,0, 90, 0.25);
  box-sizing: border-box;
  border-image: linear-gradient(255.15deg, rgba(180, 210, 255, 1) 0%, rgba(255, 255, 255, 0) 100%) 2;
}

.logo {
  width: 50px;
  height: 50px;
  margin-right: 20px;

}

.title-container {
  position: absolute;
  left: 5%;
  top: 10%;
  margin-top: 0;
  animation: fade-in-down 1s ease-out .2s both;
  display: flex;
  line-height: 50px;
  .title {
    margin: 0 auto ;
    font-family: '微软雅黑', serif;
    font-weight: bold;
    font-size: 40px;
    color:#333333;
    letter-spacing: 5px;
    text-shadow:
        2px 2px 2px rgba(0, 0, 0, 0.3),
        4px 4px 4px rgba(0, 0, 0, 0.1);
  }

}
.login-form{
  padding:40px 40px 40px 40px;
  opacity: 1;
  border-radius: 0px 30px 30px 0px;
  background: #ffffff;
  width: 420px;

  box-shadow: -1px 0 2px #0202021a;
}
.login-title{
  position: absolute;
  left:0;
  width: 100%;
  text-align: center;
  top:-25px;
  height: 70px;
  animation: fade-in-down 1s ease-out .2s both;
  color: #333333;
  font-size: 30px;
}
.login-bottom {
  position: absolute;
  left:0;
  bottom: 0;
  padding-bottom: 10px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: #333333;
}
.bottomBgc {
  position: absolute;
  bottom: 0;
  height: 194px;
  width: 100%;
  background-image: url('@/assets/img/login/education/loginA/loginBG.svg');
}
.login-btn {
  margin: 3% auto 5%;
  padding: 0;
  border: none;
  width: 100%;
  height: 52px;
  line-height: 52px;
  font-size: 18px;
  color: #fff;
  transition: all 0.3s ease-in;
  border-radius: 27px;
}
</style>
