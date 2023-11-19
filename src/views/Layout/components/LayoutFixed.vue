<script setup>
import LayoutHeaderUI from './LayoutHeaderUI.vue'
import { useScroll } from '@vueuse/core'

const{y} =useScroll(window)
</script>


<template>
<div class="app-header-sticky" :class="{show:y>78}">
    <div class="container">
        <RouterLink class="logo"  to=" " />
        <!-- 导航区域 -->

       <LayoutHeaderUI />
       <div class="right">
        <Routerlink to="/">品牌</Routerlink>
        <Routerlink to="/">专题</Routerlink>
       </div>
        
    </div>

</div>
</template>



<style lang="scss" scoped>

</style>