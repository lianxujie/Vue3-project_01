//把components中的组件都进行全局化注册
//通过插件的方式
import ImageView from './ImageView/index.vue' 
import Sku from './xtxSku/index.vue'
export const compoentPlugin = {
    install(app) {
        app.component('XtxImageView', ImageView)
        app.component('XtxSku',Sku)
    }
}