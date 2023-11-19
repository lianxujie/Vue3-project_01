
import { dividerProps } from 'element-plus';

import { getGoodsAPI } from '@/apis/home';

<script setup>
import HomePanel from './HomePanel.vue'
import { getGoodsAPI } from '@/apis/home'
import { onMounted, ref } from 'vue'
import GoodsItem from './GoodsItem.vue'
//获取数据列表
const goodsProduct = ref([])
const getGoods = async () => {
    const res = await getGoodsAPI()
    goodsProduct.value=res.result
}
onMounted(() => getGoods())
</script>

<template>
  <div class="home-product">
    <HomePanel :title="cate.name" v-for="cate in goodsProduct" :key="cate.id">
      <div class="box">
        <RouterLink class="cover" to="/">
          <img v-img-lazy="cate.picture" />
          <strong class="label">
            <span>{{ cate.name }}馆</span>
            <span>{{ cate.saleInfo }}</span>
          </strong>
        </RouterLink>
        <ul class="goods-list">
          <li v-for="goods in cate.goods" :key="goods.id">
            <GoodsItem :goods="goods" />
          </li>
        </ul>
      </div>
    </HomePanel>
  </div>
</template>


<style lang="scss" scoped>

</style>