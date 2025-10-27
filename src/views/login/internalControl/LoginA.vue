<template>
<!-- 合同登录-->
  <div class="login-page">
    <div class="title-container titles">
      <div class="logo">
        <img class="bg-image" src="@/assets/img/login/internalControl/loginA/login-logo.png"  />
      </div>
      <div class="title">
        <span>智能合同管控系统</span>
      </div>
    </div>
    <div class="login-container" id="login-container">
      <div class="login-form">
        <div  class="txt">登录</div>
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
        <button class="login-btn">登录</button>
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
import { ref,onMounted,nextTick} from 'vue';

import jq from 'jquery'

const username = ref('admin');
const password = ref('test123456');

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

<style lang="scss" scoped>
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
    background: url('@/assets/img/login/internalControl/loginA/loginBg.png') top center no-repeat;
    background-size: cover;
    content: "";
  }
}

.login-container {
  width: 1000px;
  height: 400px;
  position: relative;
  top:20px;
  display: flex;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1), 0px 17px 36px rgba(0,0, 90, 0.25);
  overflow: hidden;
  z-index: 1;
}

.login-form {
  flex:1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .txt {
    margin: 5px 0 15px 0;
    padding-bottom: 10px;
    text-align: left;
    font-size: 30px;
    color: #333;
    letter-spacing: 10px;
    line-height: 30px;
    font-weight: 500;
  }
}

.logo {
  width: 60px;
  height: 60px;
  margin-right: 20px;

}

.title-container {
  position: absolute;
  left: 5%;
  top: 10%;
  margin-top: -50px;
  animation: fade-in-down 1s ease-out .2s both;
  display: flex;
  line-height: 50px;
  .title {
    margin: 0 auto ;
    font-family: '微软雅黑', serif;
    font-size: 40px;
    color:#333;
    letter-spacing: 5px;
    text-shadow:
        2px 2px 2px rgba(0, 0, 0, 0.3),
        4px 4px 4px rgba(0, 0, 0, 0.1);
  }

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
  position: relative;
  width: 100%;
  height: 100%;
  background: url('@/assets/img/login/internalControl/loginA/login-pic.png') no-repeat center;
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
  color: #333333;
  z-index: 2;
}
</style>
