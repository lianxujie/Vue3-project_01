<script setup>
import LayoutHeaderUI from "./LayoutHeaderUI.vue";

//vueuse插件-vue官方封装组合式API的插件
import { useScroll } from "@vueuse/core";

//代表窗口纵向的滚动距离
const { y } = useScroll(window);
</script>

<template>
  <div
    class="app-header-sticky"
    :class="{ show: y > 78 }">
    <div class="container">
      <RouterLink
        class="logo"
        to=" " />
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
.app-header-sticky{
    width:100%;
    height:80px;
    position:fixed;
    left:0;
    top:0;
    z-index:999;
    background-color:#fff；
    border-bottom:1px solid #e4e4e4;
    //此处为关键样式--实现吸顶导航
    //状态一:网上平移自身高度+完全透明
    transform:translateY(-100%);
    opacity:0;

    &.show{
        transition:all 0.3s linear;
        transform:none;
        opacity:1;
    }

    .container{
        display:flex;
        align-items:center;
    }
    .logo{
        width:200px;
        height:80px;
        background:url("@/assets/images/logo.png") no-repeat right 2px;
        background-size:160px auto;
    }
    .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;

      &:hover {
        color: $xtxColor;
      }
    }
  }
    }

}
</style>
