<template>
  <LoginBase />
</template>

<script setup lang="ts">
import LoginBase from './Login.vue'
</script>

<style lang="scss" scoped>
/* 方案A：政务深蓝（沉稳权威） 覆盖背景与按钮主色 */
.login-page {
  background: radial-gradient(60% 60% at 50% 50%, #0B1B4A 0%, #0E2A78 60%, #0b3ba7 100%);
}
.decor-grid { opacity: 0.04; }
.login-card::before { background: linear-gradient(135deg, rgba(37, 99, 235, 0.6), rgba(6, 182, 212, 0.35)); }
.submit-btn {
  background: linear-gradient(135deg, #2563EB, #1E40AF);
}
.submit-btn:hover { background: linear-gradient(135deg, #1E40AF, #1D4ED8); }
</style>

