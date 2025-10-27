<template>
  <Login >
    <template #loginList>
      <div
          v-for="(theme, index) in themes" class="nav-item"
          :key="index"
          :class="{ active: currentTheme === theme.id }"
          @click="switchTheme(theme.id)"
      >
        <el-tooltip
            class="box-item"
            effect="dark"
            :content="theme.remark"
            placement="bottom"
        >
          <el-button>
            {{ theme.name }}</el-button>
        </el-tooltip>
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
import LoginB from './LoginB.vue'
import LoginC from './LoginC.vue'
import LoginD from './LoginD.vue'
import LoginE from './LoginE.vue'
import LoginF from './LoginF.vue'
import LoginG from './LoginG.vue'
import LoginH from './LoginH.vue'
import { ref,computed } from 'vue'


const currentTheme = ref('A')

// 主题配置
const themes = [
  { id: 'A', name: '登录页A',remark:'合同' },
  { id: 'B', name: '登录页B',remark:'采购' },
  { id: 'C', name: '登录页C',remark:'销售' },
  { id: 'D', name: '登录页D' ,remark:'资产'},
  { id: 'E', name: '登录页E',remark:'预算' },
  { id: 'F', name: '登录页F' ,remark:'支付'},
  { id: 'G', name: '登录页G',remark:'其他' },
  { id: 'H', name: '登录页H' ,remark:'其他'},
]
const currentComponent = computed(() => {
  switch(currentTheme.value) {
    case 'A': return LoginA
    case 'B': return LoginB
    case 'C': return LoginC
    case 'D': return LoginD
    case 'E': return LoginE
    case 'F': return LoginF
    case 'G': return LoginG
    case 'H': return LoginH
    default: return LoginA
  }
})

function switchTheme(themeId: string) {
  currentTheme.value = themeId
}
</script>

