import httpinstance from '@/utils/http'


//调用接口函数
export function getCategoryAPI() {
    return httpinstance({
        url:'/home/category/head'
    })
}