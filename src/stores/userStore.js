import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'
import { userCartStore } from './cartStore'
import { mergeCartAPI } from '@/apis/cart'

export const userUserStore = defineStore('user', () => {
    const cartStore = userCartStore()

    //定义管理用户数据的state
    const userInfo = ref({})
    
    //定义获取接口数据的action函数
    const getUserInfo = async ({
        account,password
    }) => {
        const res = await loginAPI({
            account, password
        })
        userInfo.value = res.result 
        //合并购物车的操作
        await mergeCartAPI(cartStore.cartList.map(item => {
            return {
                skuId: item.skuId,
                count: item.count,
                selected: item.selected
            }
        }))
      cartStore.updateNewList()
    }

    //退出时清除用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
        //执行清除购物车的action
        cartStore.clearCart()
    }

    //以对象的形式把state和action return 
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    persist: true,
})