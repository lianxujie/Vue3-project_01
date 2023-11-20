//封装分类数据业务相关代码
import { onMounted, ref } from 'vue'
import { getCategoryAPI } from '@/apis/category'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'


export function useCategory() {
    //获取分类数据--局部细化数据的api写在当前组件
    const categoryData = ref([])
    //实例化路由实例，专门用来获取路由参数
    const route = useRoute()

    //"id=route.params.id"解决路由传参的滞后性 
    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }

    onMounted(() => getCategory())
    //目标:路由参数变化时，可以将分类数据接口重新发送 
    //“to”代表目标路由对象 
    onBeforeRouteUpdate((to) => {
        //存在问题,使用最新的路由参数请求最新的分类数据
        getCategory(to.params.id)
    })
    return {
        categoryData
    }
}