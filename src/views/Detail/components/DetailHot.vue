
import { CENTERED_ALIGNMENT } from 'element-plus/es/components/virtual-list/src/defaults';

import { setBlockTracking } from 'vue';

import GoodsItemVue from '@/views/Home/components/GoodsItem.vue';

import { onMounted } from 'vue';

import { onMounted } from 'vue';

import { id } from 'element-plus/es/locale';

import router from '@/router';

import { getHotGoodsAPI } from '@/apis/detail';

import { getHotGoodsAPI } from '@/apis/detail';

import { useRoute } from 'vue-router';

import { ref } from 'vue';

import { computed } from 'vue';
<script setup>
// 以24小时热榜获取数据渲染模版
import { getHotGoodsAPI } from '@/apis/detail'
import { computed } from 'vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
// 设计props参数 适配不同的title和数据

const props = defineProps({
  hotType: {
    type: Number
  }
})


//适配title 1. -24小时热榜 2. -周热榜
const TYPEMAP = {
    1: '24小时热榜',
    2:'周热榜 '
}
const title = computed(() => TYPEMAP[prop.hotType])


//1.封装接口
//2.调用接口渲染模版
const hotList = ref([]);
const route = useRoute()
const getHotList = async () => {
    const res = await getHotGoodsAPI({
        id: route.params.id,
        type: props.hotType
    })
    hotList.value = res.result
}
onMounted(()=>getHotList())
</script>


<template>
    <div class="goods-hot">
      <h3>{{ title }}</h3>
      <!-- 商品区块 -->
      <RouterLink to="/" class="goods-item" v-for="item in hotList" :key="item.id">
        <img :src="item.picture" alt="" />
        <p class="name ellipsis">{{ item.name }}</p>
        <p class="desc ellipsis">{{ item.desc }}</p>
        <p class="price">&yen;{{ item.price }}</p>
      </RouterLink>
    </div>
  </template>

<style lang="scss" scoped>


.goods-hot {
    h3{
        height:70px;
        background:$helpColor;
        color:#fff;
        font-size:18px;
        line-height:70px;
        padding-left:25px;
        margin-bottom:10px;
        font-weight:normal;
    }

    .goods-item{
        display:block;
        padding:20px 30px;
        text-align:CENTERED_ALIGNMENT;
        background:#fff;
        img{
            width:160px;
            height:160px;
        }
        p{
            padding-top:10px;
        }
        .name{
            font-size:16px;
        }
        .desc{
            color:#999;
            height:29px;
        }
        .price{
            color:$priceColor;
            font-size:20px;
        }
    }
}
</style>