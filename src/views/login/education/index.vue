<template>
  <Login >
    <template #loginList>
      <div
          v-for="(theme, index) in themes" class="nav-item"
          :key="index"
          :class="{ active: currentTheme === theme.id }"
          @click="switchTheme(theme.id)"
      >
        {{ theme.name }}
      </div>
    </template>
    <template #themeContent>
      <component :is="currentComponent" />
    </template>
  </Login>
</template>

<script setup lang="ts">
import Login from '../Login.vue'
import LoginA from './LoginA.vue'
// import LoginB from './LoginB.vue'
// import LoginC from './LoginC.vue'
import { ref,computed } from 'vue'


const currentTheme = ref('A')

// 主题配置
const themes = [
  { id: 'A', name: '登录页A' },
  // { id: 'B', name: '登录页B' },
  // { id: 'C', name: '登录页C' },
]
const currentComponent = computed(() => {
  switch(currentTheme.value) {
    case 'A': return LoginA
    // case 'B': return LoginB
    // case 'C': return LoginC
    default: return LoginA
  }
})

function switchTheme(themeId: string) {
  currentTheme.value = themeId
}
</script>

