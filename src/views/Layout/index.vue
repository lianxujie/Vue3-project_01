
<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'


//触发获取导航列表的action--- Pinia优化重复请求
import { useCategoryStore } from '@/stores/categoryStore'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()
onMounted(()=>categoryStore.getCategory())
</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 添加key 破坏复用机制 强制销毁重建 -->
  <!-- 会造成Banner等组件重复发送请求,造成浪费 -->
  <!-- <RouterView :key="$route.fullPath" /> -->
  <RouterView />
  <LayoutFooter />
</template>

<style lang="scss" scoped>

</style>