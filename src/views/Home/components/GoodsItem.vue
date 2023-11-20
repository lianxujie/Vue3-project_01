
<script setup>
defineProps({
    goods: {
        type: Object,
        default:()=>{}
    }
})

</script>


<template>
<RouterLink  to="/" class="goods-item">
    <!-- 懒加载指令,只有当图片正式进入视口区域内才会发送图片网络请求 -->
   <img v-img-lazy="goods.picture" alt=""/>
   <p class="name ellipsis">{{ goods.name }}</p>
    <p class="desc ellipsis">{{ goods.desc }}</p>
    <p class="price">&yen;{{ goods.price }}</p>
</RouterLink>
</template>

<style lang="scss" scoped>

</style>