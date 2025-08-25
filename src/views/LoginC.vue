<template>
  <LoginBase />
</template>

<script setup lang="ts">
import LoginBase from './Login.vue'
</script>

<style lang="scss" scoped>
/* 方案C：蓝紫智感（品牌感） */
.login-page {
  background: radial-gradient(60% 60% at 50% 50%, #0F1436 0%, #13295E 70%, #0b3ba7 100%);
}
.decor-grid { opacity: 0.04; }
.login-card::before { background: linear-gradient(135deg, rgba(79, 70, 229, 0.6), rgba(37, 99, 235, 0.45)); }
.submit-btn {
  background: linear-gradient(135deg, #4F46E5, #2563EB);
}
.submit-btn:hover { background: linear-gradient(135deg, #4338CA, #2563EB); }
</style>

