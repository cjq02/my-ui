<template>
  <!--  预算登录-->
  <div class="login-container">
    <div class="login-bg"></div>
    <div class="inner">
      <div class="title-container">
        <h3 class="title">
          <span>预算管理平台</span>
        </h3>
      </div>
      <div class="login-inner">
        <div class="login-pic">

          <div class="login-img">
            <img src="@/assets/img/login/internalControl/loginE/login-pic.png" alt="">
          </div>
        </div>

        <div id="login-info" class="login-info">
          <div class="login-con clearfix">
            <div class="login-form">
              <div class="txt">登录</div>
              <el-form ref="formRef" :model="model" auto-complete="on" label-position="left">
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
              </el-form>
            </div>
          </div>
          <div class="footer">Copyright © 九阶（厦门）信息科技有限公司</div>
        </div>
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
import jq from 'jquery'
const pwdType = ref('password')
const model = reactive({
  password: 'demo123456',
  username: 'demo',
  validateCode: '',
})

onMounted( () => {
})
</script>

<style lang="scss" scoped>
$bg: #333;
$light_gray: #eee;
$dark_gray: #889aa4;
$cursor: #fff;
//@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
//    .login-container .el-input input {
//        //color: $bg;
//        //&::first-line {
//        //    color: $light_gray;
//        //}
//    }
//}
.flex {
  display: flex;
}
.flex1 {
  flex: 1;
}
.login-bg {
  position: absolute;
  left: 0;
  right: 0;
  box-sizing: border-box;
  width: 100%;
  min-width: 900px;
  height: 100%;
  background-image: url('@/assets/img/login/internalControl/loginE/login-bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

}
.login-inner{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  //background-image: url('@/assets/img/login/internalControl/loginE/login-pic.png');
  //background-repeat: no-repeat;
  //background-position: center;
  //background-size: cover;
}
/* reset element-ui css */

.login-container {
  overflow: hidden;
  position: relative;
  width: 100%;
  min-height: 100%;
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
    //position: absolute;
    //right: 0!important;
    //top: 0;
    position: relative;
    width: 600px;
    min-width: 600px;
    height: 100%;
    background-size: 100% 100%;
    box-shadow: 1px 1px 15px 1px rgba(0, 0, 0, 0.15);
    .footer{
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
  }
  .login-pic{
    position: relative;
    flex:1;
    background: url('@/assets/img/login/internalControl/loginE/login-pic-bg.png') top center no-repeat;
    background-size: cover;
    img {
      animation: float 6s ease-in-out infinite;
    }

  }
  .login-img {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: 6%;
    text-align: right;
    transform: translate(-50%, -50%);
    width: 50%;
    max-width: 650px;
    img {
      max-width: 100%;
      //height: 100%;
      min-height: 70%;
    }
  }
  .login-con {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -20%;
    width: 100%;
    transform: translate(-50%, -50%);
  }
  .login-form {
    overflow: hidden;
    margin: 0 auto;
    padding: 30px 10%;
    height: auto;
    .txt {
      margin: 2% 0 5%;
      padding-bottom: 10px;
      text-align: left;
      font-weight: normal;
      font-size: 30px;
      color: #333;
      letter-spacing: 10px;
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
  .title-container {
    position: absolute;
    left: 5%;
    top: 10%;
    z-index: 1;
    //margin-top: -100px;
    .title {
      margin: 0 auto 10px;
      line-height: 80px;
      font-family: '微软雅黑', serif;
      font-weight: bold;
      font-size: 48px;
      color: $cursor;
      letter-spacing: 3px;
      .pic {
        float: left;
        margin-right: 30px;
        margin-top: 5px;
        height: 70px;
        font-size: 0;
      }
      span {
        width: 941px;
        height: 75px;
        line-height: 75px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei, sans-serif;
        font-weight: bold;
        font-size: 44px;
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
    height: 55px;
    line-height: 55px;
    font-size: 18px;
    color: #fff;
    transition: all 0.3s ease-in;


    background: linear-gradient(90deg, rgba(234, 93, 31, 1)   0%,rgba(235, 90, 73, 1) 100%);


    &:hover {
      background: linear-gradient(180deg,rgba(235, 90, 73, 1) 0%, rgba(234, 93, 31, 1) 100%);
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
@media screen and (max-width: 1440px) {
  .login-container {
    .title-container {
      //margin-top: -60px;
      .title {
        line-height: 55px;
        font-size: 36px;
        span {
          line-height: 55px;
          font-size: 42px;
        }
        .pic {
          margin-right: 20px;
          height: 55px;
        }
      }
    }
    .login-info {
      //right: 5%;
      width: 420px;
      min-width: 420px;
    }
    .login-con {
      margin-top: -10%;
    }
    .login-img {
      width: 50%;
      //margin-left:5%
    }
    .login-form {
      padding: 20px 8% 15px;

    }
  }
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
</style>
