
import { getHotAPI } from '@/apis/home';
<script setup>
import HomePanel from './HomePanel.vue'
import { getHotAPI } from '@/apis/home'
import { onMounted, ref } from 'vue'

const hotList = ref([])
const getHotList = async () => {
    const res = await getHotAPI()
    hotList.value =res.result
}
onMounted(() => getHotList())

</script>


<template>
<HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
<ul class="goods-list">
    <li v-for="item in hotList" :key="item.id">
       <RouterLink to="/"> 
        <img v-img-lazy="item.picture" alt="">
          <p class="name">{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
       </RouterLink>

    </li>

</ul>

</HomePanel>
</template>



<style lang="scss" scoped>

</style>    