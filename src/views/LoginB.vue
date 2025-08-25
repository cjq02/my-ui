<template>
  <LoginBase />
</template>

<script setup lang="ts">
import LoginBase from './Login.vue'
</script>

<style lang="scss" scoped>
/* 方案B：科技蓝青（清爽现代） */
.login-page {
  background: linear-gradient(135deg, #0b3ba7 0%, #2563eb 35%, #0ea5e9 100%);
}
.decor-grid { opacity: 0.05; }
.login-card::before { background: linear-gradient(135deg, rgba(59, 130, 246, 0.65), rgba(14, 165, 233, 0.5)); }
.submit-btn {
  background: linear-gradient(135deg, #3B82F6, #0EA5E9);
}
.submit-btn:hover { background: linear-gradient(135deg, #2563EB, #0EA5E9); }
</style>

