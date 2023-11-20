
<script setup>
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/apis/category'
import { onMounted, ref } from 'vue-router'
import { useRoute } from 'vue-router'
import GoodsItem from '../Home/components/GoodsItem.vue'

//获取面包屑导航数据
const categoryData = ref([])
const route = useRoute()
const getCategoryData = async () => {
    const res = await getCategoryFilterAPI(route.params.id)
    categoryData.value = res.result
}
onMounted(() => getCategoryData())

//获取基础列表数据渲染
const goodList = ref([])
const reqData = ref({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField:'publishTime'
})

const getGoodList = async () => {
    const res = await getSubCategoryAPI(reqData.value)
    console.log(res)
    goodList.value = res.result.items
}
onMounted(() => getGoodList())

// tab切换回调

const tabChange = () => {
    console.log('tab切换了', reqData.value.sortField)
    reqData.value.page = 1
    getGoodList()
}

//加载更多 
const disabled = ref(false)
const load = async () => {
    console.log('加载更多数据')
    //获取下一页的数据
    reqData.value.page++
    const res = await getSubCategoryAPI(reqData.value)
    goodList.value = [...goodList.value, ...res.result.items]
    //加载完毕 停止监听
    if (res.result.items.length === 0) {
        disabled.value = true
    }
}
</script>


<template>
  <div class="container ">
    <!-- 面包屑导航 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${categoryData.parentId}` }">{{ categoryData.parentName }}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <GoodsItem v-for="goods in goodList" :goods="goods" :key="goods.id" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>