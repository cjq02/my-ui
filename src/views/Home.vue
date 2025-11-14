<template>
  <div class="system-platform">
    <!-- 顶部标题区域 -->
    <header class="header">
      <h1 class="title">九阶信息系统一体化平台</h1>
    </header>
    <!-- 系统卡片展示区 -->
    <main class="system-cards-container">
      <!-- 卡片滚动容器 -->
      <div class="cards-scroll-container" ref="scrollContainer">
        <div class="cards-wrapper">

          <!-- 内控系列管控系统 -->
          <div class="system-card"  @click="routerPush('/internalControl')">
            <div class="card-icon green">
              <svg t="1760084551735" class="icon" viewBox="0 0 1152 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6968" width="52" height="52"><path d="M504.4224 19.456c18.048 0 35.6096 5.9136 49.8944 16.9984l4.1728 3.4816 78.0288 68.608c5.4528 4.9152 12.2368 7.8848 19.4816 8.6272l3.6608 0.1792h424.96a59.6736 59.6736 0 0 1 59.0848 56.1152l0.1024 4.096V802.816a60.032 60.032 0 0 1-55.0912 60.2368l-4.096 0.1792H995.328v80.6912a60.032 60.032 0 0 1-55.0912 60.2368l-4.096 0.1792H76.5952a60.0064 60.0064 0 0 1-59.0848-56.32l-0.1024-4.096V220.9792a60.032 60.032 0 0 1 55.0912-60.2368l4.096-0.1792H165.888V79.872A60.032 60.032 0 0 1 220.9792 19.6352l4.096-0.1792h279.3472zM255.616 694.912H232.704l-0.0512 4.4544-0.0512 4.5568-0.4352 19.1744H167.2448v144.1792h23.808v-121.2672h40.4224c-1.536 24.4992-14.6944 44.2112-39.552 59.136 6.0672 5.2736 12.0832 11.392 18.0224 18.3808 14.8224-9.7792 25.9584-21.0176 33.4336-33.664 9.0624 8.0128 16.8192 15.104 23.2704 21.2224l3.6864 3.5584 6.4512 6.4512 17.664-17.664c-9.3696-7.68-18.0736-14.592-26.0352-20.736l-5.8368-4.4544-10.88-8.0896c0.9984-5.0688 1.8176-10.8544 2.4576-17.3824l0.5888-6.7584h40.96v86.6304c0 2.8672-0.512 5.1712-1.536 6.9632a7.1168 7.1168 0 0 1-3.9936 3.456c-1.6128 0.512-4.4544 0.768-8.4736 0.768-7.3472 0-14.9248-0.2816-22.7584-0.8704 2.2272 8.6272 3.968 16.2816 5.248 22.9376 13.4912 0.2816 24.064 0.1024 31.7696-0.512 7.68-0.6656 13.568-3.3024 17.536-7.936 3.328-3.8656 5.2736-9.1648 5.8368-15.872l0.1536-4.224v-114.2528H255.36l0.0768-3.2512 0.0512-3.328 0.128-21.6064z m118.2976 2.4576h-21.1712v31.1552h-16.1024v22.4h16.128v31.232l-9.216 1.9712-8.832 1.792 1.408 25.1904 16.64-4.2752v30.72c-0.128 4.864-1.7152 7.3216-4.736 7.3216-5.12 0-9.216-0.1536-12.2624-0.512 2.2272 8.3968 3.7888 16.0512 4.736 22.912 11.008-0.2816 18.3552-0.768 22.016-1.3824a12.032 12.032 0 0 0 8.448-5.7344 22.272 22.272 0 0 0 2.816-10.1888l0.128-3.328v-45.4144l12.4416-3.4048a134.9888 134.9888 0 0 1 0-15.872l0.6912-7.936-13.1328 3.2256v-26.3168h11.904v-22.4h-11.904V697.344z m124.0832 94.3104h-100.7872v21.3504h39.168v26.624h-49.664v21.3248h120.3968v-21.3504h-48.3072V813.056h39.1936v-21.3504z m-30.2592-45.824l-14.8992 14.848 38.6816 29.952 15.232-16.4608a1596.3392 1596.3392 0 0 0-21.0432-15.5904l-6.3488-4.5568-11.6224-8.192z m-40.7808-0.5376c-11.2896 8.96-21.76 16.768-31.4112 23.3984l-7.0912 4.7616 14.336 16.4608 39.9104-29.4144-15.744-15.2064z m28.5184-49.1776l-24.832 4.7104 4.5312 15.232h-42.1632v35.3536h22.016v-14.0032h67.584v14.0032h22.016v-35.328H460.8c-1.5104-6.5536-3.2768-13.2096-5.3248-19.968z m398.1312-50.2016h-141.7216a24.064 24.064 0 0 0-2.9184 47.872l2.9184 0.256h141.7216a23.9104 23.9104 0 0 0 23.3472-24.7808 24.0128 24.0128 0 0 0-23.3472-23.3472z m0-116.1216h-243.9168a24.2176 24.2176 0 0 0-24.1664 24.1664c0 12.3648 9.3696 22.6048 21.3504 24.0128l2.816 0.1536h243.9168a23.808 23.808 0 0 0 23.9616-24.3712 23.9872 23.9872 0 0 0-23.9616-23.9616zM355.9424 208.6912H76.5952a11.9296 11.9296 0 0 0-11.8784 12.0832V399.36h883.3024v-80.6912a12.2112 12.2112 0 0 0-11.8784-12.0832h-424.96c-19.8656 0-39.1168-7.168-54.0672-20.48l-78.0288-68.608a34.3296 34.3296 0 0 0-23.1424-8.8064z m148.48-140.9024H225.0752a11.8784 11.8784 0 0 0-11.6992 9.9328l-0.1792 2.1504v80.6912h142.7456c18.048 0 35.6096 5.9136 49.8944 16.9984l4.1728 3.4816 78.0288 68.608c5.4528 4.9152 12.2368 7.8848 19.4816 8.6272l3.6608 0.1792h424.96a60.0832 60.0832 0 0 1 56.3968 41.8304l1.152 4.0448h102.8096V177.7664a12.1344 12.1344 0 0 0-9.728-11.8784l-2.1504-0.2048h-424.96a81.28 81.28 0 0 1-49.8944-16.9984l-4.1728-3.4816-78.0288-68.608a34.3296 34.3296 0 0 0-23.1424-8.8064z" p-id="6969" fill="#ffffff"></path></svg>
            </div>
            <h3 class="card-title">内控系列管控系统</h3>
          </div>
          <!-- 体育系列管理系统（主系统） -->
          <div class="system-card " @click="routerPush('/sports')">
            <div class="card-icon blue">
              <!-- 体育相关图标 - 体育场和运动员组合 -->
              <svg t="1760075885707" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4719" width="60" height="60"><path d="M637.3 777.3m-101.5 0a101.5 101.5 0 1 0 203 0 101.5 101.5 0 1 0-203 0Z" fill="#ffffff" p-id="4720"></path><path d="M775.9 144.9c63.1-1.4 115.5 49.2 116.9 113.1 1.4 63.9-48.6 116.8-111.8 118.3-63.1 1.4-115.5-49.2-116.9-113.1v-2.6c-0.7-63.2 49.3-115 111.8-115.7z m-477.3 75.3c-27.8 0.2-14.7 24.4-1.1 35.6 66.3 55.3 132.6 110.4 199 165.6L393 496.7c-17.9 12.9-2.5 49.6 10.9 60.4l397.3 321.6h157.4c-4.7-19-2.5-44-18.3-56.5-112.4-90-224.8-180-337.1-270.1 36.9-29.3 73.8-58.7 110.5-88 10.3-13.5 8.6-32.6-4-44-80.4-67.6-160.8-135-241.1-202.3-56.5 0.7-113.1 1.5-170 2.4zM64 515c52.5-1.8 105-3.4 157.5-5l22.8 25.1 208 166.4c3.9 10.2 1.5 21.8-6.2 29.6l-73.6 48.6c-15.5 5.4-32.7 2.9-46.1-6.7-84.5-69.7-168.9-139.5-253.2-209.4-9.2-7.8-7.9-36.5-9.2-48.6z" fill="#ffffff" p-id="4721"></path><path d="M443.1 789.7h194.2v35.2H443.1zM336.3 843.6h301v35.2h-301z" fill="#ffffff" p-id="4722"></path></svg>

              <div class="orbit"></div>
            </div>
            <h3 class="card-title">体育系列管理系统</h3>
          </div>

          <!-- 高校系列管理系统 -->
          <div class="system-card"  @click="routerPush('/education')">
            <div class="card-icon orange">
              <svg t="1760084713479" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9097" width="48" height="48"><path d="M879.575843 120.036894c-19.588518 0-31.828329 12.239812-31.828329 31.852424v737.376376c0 31.852424-31.804235 63.680753-63.632565 63.680753H235.90149c-36.695341 0-80.763482-31.828329-80.763482-63.680753v-71.053553c0-31.828329 36.719435-51.440941 75.872376-51.440941h526.191436c19.564424 0 31.804235-12.239812 31.804235-31.852424V115.169882C789.006055 44.092235 740.070902 0 664.198525 0H235.90149C167.37782 0 98.854149 39.201129 98.854149 115.145788v801.05713c7.348706 56.356141 63.608471 102.881882 119.916424 107.797082h572.693082c68.523671 0 124.807529-56.332047 124.807529-120.036894V151.889318c-4.891106-12.263906-17.130918-31.852424-36.695341-31.852424z" fill="#ffffff" p-id="9098"></path><path d="M762.092925 832.933647H248.141302c-19.588518 0-31.804235 12.239812-31.804235 31.828329s12.215718 31.852424 31.804235 31.852424h513.927529c19.588518 0 31.828329-12.263906 31.82833-31.852424 0-19.588518-12.239812-31.852424-31.804236-31.852423z" fill="#ffffff" p-id="9099"></path></svg></div>
            <h3 class="card-title">高校系列管理系统</h3>
          </div>

        </div>
      </div>


    </main>
    <footer class="login-bottom"><span>技术支持：九阶（厦门）信息科技有限公司</span></footer>

  </div>
</template>


<script setup>
// 获取store和router
import {useRouter } from 'vue-router'
const router = useRouter()
function routerPush(url){
  router.push(url)
}
</script>


<style scoped>
/* 基础样式 */
.system-platform {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4eaf1 100%);
  padding: 2rem 1rem;
  box-sizing: border-box;
  overflow-x: hidden;
  position: relative;
}

/* 装饰背景 */
.system-platform::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
      radial-gradient(circle at 10% 20%, rgba(138, 178, 248, 0.1) 0%, transparent 20%),
      radial-gradient(circle at 90% 70%, rgba(187, 154, 245, 0.1) 0%, transparent 30%);
  z-index: 0;
}

/* 标题样式 */
.header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
}

.title {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-top:70px;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* 分类标签 */
.category-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 0.6rem 1.5rem;
  border-radius: 20px;
  border: none;
  background-color: rgba(255, 255, 255, 0.8);
  color: #555;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.tab-btn:hover {
  background-color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

.tab-btn.active {
  background-color: #4a89dc;
  color: white;
  box-shadow: 0 4px 8px rgba(74, 137, 220, 0.3);
}

/* 卡片容器 */
.system-cards-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1;
}

/* 滚动容器 */
.cards-scroll-container {
  overflow-x: auto;
  padding: 2rem 0;
  margin: 0 4rem;
  scrollbar-width: none; /* 隐藏滚动条 */
}

.cards-scroll-container::-webkit-scrollbar {
  display: none; /* 隐藏滚动条 */
}

.cards-wrapper {
  display: flex;
  gap: 2rem;
  justify-content: center;
  min-width: max-content;
  padding: 1rem 0;
}

/* 系统卡片样式 */
.system-card {

  width: 260px;
  height: 320px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.system-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.system-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
}



.system-card.active::before {
  opacity: 1;
}

/* 主卡片样式 */



/* 卡片图标样式 */
.card-icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.orange {
  background: linear-gradient(135deg, #f9a825 0%, #f57c00 100%);
}

.system-card.orange::before {
  background: linear-gradient(90deg, #f9a825 0%, #f57c00 100%);
}

.green {
  background: linear-gradient(135deg, #4caf50 0%, #2e7d32 100%);
}

.system-card.green::before {
  background: linear-gradient(90deg, #4caf50 0%, #2e7d32 100%);
}

.blue {
  background: linear-gradient(135deg, #42a5f5 0%, #1976d2 100%);
}

.system-card.blue::before {
  background: linear-gradient(90deg, #42a5f5 0%, #1976d2 100%);
}

.yellow {
  background: linear-gradient(135deg, #ffeb3b 0%, #fbc02d 100%);
}

.system-card.yellow::before {
  background: linear-gradient(90deg, #ffeb3b 0%, #fbc02d 100%);
}

.pink {
  background: linear-gradient(135deg, #f48fb1 0%, #c2185b 100%);
}

.system-card.pink::before {
  background: linear-gradient(90deg, #f48fb1 0%, #c2185b 100%);
}

/* 轨道动画效果 */
.orbit {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px dashed rgba(255, 255, 255, 0.3);
  animation: rotate 8s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 卡片标题 */
.card-title {
  font-size:20px;
  font-weight: 500;
  color: #333;
  text-align: center;
  margin: 0;
  padding: 0 10px;
}

/* 轮播按钮 */
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  color: #555;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-btn:hover {
  background-color: #f5f7fa;
  transform: translateY(-50%) scale(1.1);
  color: #42a5f5;
}

.prev-btn {
  left: 0;
}

.next-btn {
  right: 0;
}

/* 底部样式 */
.login-bottom{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  color: #333;
  font-size: 14px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #fff;
  z-index: 1;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.2);
}



/* 响应式设计 */
@media (max-width: 768px) {
  .title {
    font-size: 1.6rem;
  }

  .tab-btn {
    padding: 0.5rem 1.2rem;
    font-size: 0.9rem;
  }

  .system-card {
    width: 180px;
    height: 240px;
  }

  .main-card {
    width: 220px;
    height: 280px;
  }

  .card-icon {
    width: 80px;
    height: 80px;
  }

  .orbit {
    width: 96px;
    height: 96px;
  }

  .cards-scroll-container {
    margin: 0 2rem;
  }

  .carousel-btn {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .system-platform {
    padding: 1rem 0.5rem;
  }

  .title {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  .category-tabs {
    gap: 0.5rem;
  }

  .system-card {
    width: 160px;
    height: 220px;
  }

  .main-card {
    width: 180px;
    height: 240px;
  }

  .card-title {
    font-size: 20px;
  }
}
</style>
