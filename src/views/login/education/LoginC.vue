<template>
  <div class="login-container">
    <div class="inner">

      <div class="login-inner">


        <div class="login-info">
          <div class="login-logo">
            <img class="logo" src="@/assets/img/login/education/loginC/logo.png" alt="">
            <div class="title">
              <span>高校系统管理平台</span>
            </div>
          </div>
          <div class="login-con clearfix">
            <div class="login-form">
              <el-form ref="formRef" :model="model" auto-complete="on" label-position="left">
              <el-tabs v-model="activeName" class="demo-tabs" >
                <el-tab-pane label="账号登录" name="first">
                  <el-form-item prop="username">
                    <div class="item">
                      <label class="lab">
                        <svg class="input-icon" viewBox="0 0 24 24" width="25" height="25">
                          <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </label>
                      <el-input
                          v-model="model.username"
                          placeholder="请输入账号"
                          name="账号"
                          type="text"
                          auto-complete="on"
                      />
                    </div>
                  </el-form-item>

                  <el-form-item prop="password">
                    <div class="flex">
                      <label class="lab">
                        <svg class="input-icon" viewBox="0 0 24 24" width="25" height="25">
                          <path fill="currentColor" d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"/>
                        </svg>
                      </label>
                      <el-input
                          v-model="model.password"
                          :type="pwdType"
                          placeholder="请输入密码"
                          name="password"
                          auto-complete="on"
                      />
                      <span class="show-pwd" >

                  </span>
                    </div>
                  </el-form-item>
                  <el-button
                      class="login-btn"
                      type="primary"
                      style="width: 100%"
                  >
                    <span v-html="'登&nbsp;录'"></span>
                  </el-button>
                </el-tab-pane>
              </el-tabs>

              </el-form>
            </div>
          </div>
        </div>
        <div class="login-footer">Copyright © 九阶（厦门）信息科技有限公司</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
}
</script>
<script setup>
import { reactive, ref,onMounted } from 'vue'
const pwdType = ref('password')
const activeName=ref('first')
const model = reactive({
  password: 'demo123456',
  username: 'demo',
  validateCode: '',
})

onMounted( () => {
})
</script>

<style lang="scss" scoped>
$bg: #43507e;
$light_gray: #eee;
$cursor: #fff;

.flex {
  display: flex;
}
.flex1 {
  flex: 1;
}

.login-inner{
  position: absolute;
  width: 100%;
  height: 100%;
}
/* reset element-ui css */

$bg: #43507e;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
  overflow: hidden;
  position: relative;
  width: 100%;
  min-height: 100%;

  background: #ffffff url('@/assets/img/login/education/loginC/login-bg.png') center no-repeat;
  background-size: cover;
  .inner {
    position: absolute;
    z-index: 9;
    width: 100%;
    height: 100%;
  }
  .item {
    position: relative;
  }
  .lab {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 3;
    min-width: 53px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    svg{
      margin:12px 0 0 10px;
    }

  }
  :deep(.el-input){
    display: inline-block;
    height: 50px;
    .el-input__inner {
      padding: 12px 5px 12px 50px;
      border: 0;
      border-radius: 0;
      height: 50px;
      appearance: none;
      background: transparent;
      //caret-color: $cursor;
      font-size: 16px;
      color: #333 !important;
      &:-webkit-autofill {
        -webkit-text-fill-color: #333 !important;
        box-shadow: 0 0 0 1000px $cursor inset !important;
      }
      &::placeholder {
        color: #4447;
      }
    }
    .el-input__wrapper {
      display: block;
      padding: 0;
      box-shadow: 0 0 0 1px #e5e5e5 inset;
      &.is-focus {
        box-shadow: 0 0 0 1px var(--el-input-focus-border-color) inset;
      }
    }
  }
  .el-form-item {
    box-sizing: content-box;
    margin-bottom: 20px;
    padding-bottom: 0;
    border-radius: 10px;
    width: 100%;
    height: 50px;
    background-color: $cursor;
    line-height: 50px;
  }
  .login-info {
    display: flex;
    position: absolute;
    top: 50%;
    left: 70.5%;
    transform: translate(-50%,-50%);
    width: 450px;
    min-height: 500px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 12px;
    flex-flow: column;
    background-image: url('@/assets/img/login/education/loginC/login-pic-bg.png');
    background-attachment: fixed;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
  }
  .login-footer{
    position: absolute;
    left: 50%;
    bottom: 40px;
    margin-left: -260px;
    width: 520px;
    text-align: center;
    font-size: 14px;
    color:#8D949F;
  }
  .login-img {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 75%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    img {
      max-width: 100%;
      height: 100%;
    }
  }
  .login-con {
    width: 100%;
  }
  .login-form {
    overflow: hidden;
    margin: 0 auto;
    padding: 20px 10%;
    height: auto;
    max-width: 650px;
    .txt {
      margin: 2% 0 5%;
      padding-bottom: 10px;
      text-align: center;
      font-weight: bold;
      font-size:23px;
      color: #333;
    }
    .is-error {
      .el-form-item {
        &__error {
          left: 50px;
        }
      }
    }
    .imgCaptcha {
      right: 0;
      height: 100%;
    }
  }
  .tips {
    margin-bottom: 10px;
    font-size: 14px;
    color: #fff;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    display: inline-block;
    padding: 6px 5px;
    width: 25px;
    vertical-align: middle;
    font-size: 19px;
    color: #889aa4;
  }
  .login-logo {

    position: relative;
    top:25px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin-bottom: 15px;
    .logo{width: 50px;margin-right: 20px;}
    .title {
      line-height: 80px;
      letter-spacing: 3px;
      text-align: center;

      span {
        height: 75px;
        line-height: 75px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei, sans-serif;
        font-weight: bold;
        font-size: 28px;
        color: #333
      }
    }
    .kh {
      margin: 10px auto;
      padding: 3px 10px;
      border-radius: 3px;
      background: rgba(255, 255, 255, 0.3);
      text-align: center;
      text-shadow: none;
      font-weight: bold;
      font-size: 16px;
      color: red;
    }
    .set-language {
      position: absolute;
      right: 0;
      top: 5px;
      color: #fff;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 12px;
    cursor: pointer;
    user-select: none;
    font-size: 16px;
    color: $dark_gray;
  }
  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }
  .login-btn {
    margin: 3% auto 5%;
    padding: 0;
    border: none;
    border-radius: 8px;
    width: 100%;
    height: 52px;
    line-height: 52px;
    font-size: 18px;
    color: #fff;
    transition: all 0.3s ease-in;


    background: linear-gradient(90deg,#1890ff   0%,#0d56b5 100%);


    &:hover {
      background: linear-gradient(180deg, #0d56b5 0%,#1890ff  100%);
    }
  }
}
.login-bottom {
  position: absolute;
  left: 50%;
  bottom: 15px;
  margin-left: -260px;
  padding-bottom: 10px;
  width: 520px;
  text-align: center;
  font-size: 14px;
  color: $bg;
}


.login-container {
  :deep(.el-input__inner) {
    color: #333 !important;
  }
  :deep(.el-form-item__error) {
    left: 40px;
  }
}
.imgCaptcha {
  position: absolute;
  right: 25px;
  width: 80px;
  height: 40px;
}
:deep(.el-form-item__content) {
  display: block;
}
:deep(.el-tabs ){
  .el-tabs__item {
    font-size: 18px;
    font-weight: 500;
    text-shadow: 0 0 1px #000;
    margin-bottom: 5px;
   &is-active {
      color: #1890ff;
    }
  }
  .el-tabs__content{
    padding-top:10px;
  }
}
</style>
