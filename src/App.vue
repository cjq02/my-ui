<script setup lang="ts">
</script>

<template>
  <div>
    <nav class="top-nav">
      <div class="nav-left">
        <span class="brand">智慧场馆配色示例</span>
      </div>
      <div class="nav-links">
        <router-link to="/login-a">方案A</router-link>
        <router-link to="/login-b">方案B</router-link>
        <router-link to="/login-c">方案C</router-link>
        <router-link to="/login">原版</router-link>
      </div>
    </nav>
    <router-view />
  </div>
  
</template>

<style scoped>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 10;
  color: #e2e8f0;
  background: linear-gradient(180deg, rgba(3, 7, 18, 0.45), rgba(3, 7, 18, 0));
  backdrop-filter: blur(8px);
}
.nav-left .brand { font-weight: 600; }
.nav-links { display: flex; gap: 12px; }
.nav-links a { color: #e2e8f0; text-decoration: none; padding: 4px 8px; border-radius: 6px; }
.nav-links a.router-link-active { background: rgba(255, 255, 255, 0.12); }
</style>
