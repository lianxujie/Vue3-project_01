<script setup>
import {useCartStore} from '@/stores/cartStore'
const cartStore =useCartStore()

</script>


<template>
<div class="cart">
    <a href="javascript:;" class="curr">
        <i class="iconfont icon-cart" ></i><em>{{ cartStore.cartList.length }}</em>
    </a>
 <div class="layer">
    <div class="list">
        <div class="item" v-for="i in cartStore.cartList" :key="i">
        <RouterLink to="">
           <img src="i.picture" alt=""/>
           <div class="center">
            <p class="name elipsis-2" >
                {{ i.name }}
            </p>
            <p class="attr ellipsis">{{ i.attrsText }}</p>
           </div>
           <div class="right">
            <p class="price">&yen;{{ i.price }}</p>
            <p class="count">{{ i.count }}</p>
           </div>  
        </RouterLink>
         <i class="iconfont icon-close-new"
          @click="cartStore.delCart(i.skuId)"
         ></i>
        </div>
    </div>
    <div class="foot">
        <div class="total">
            <p>共{{ cartStore.allCount }}件商品</p>
            <p>&yen;{{ cartStore.allPrice.toFixed(2) }}</p>
        </div>
        <el-button size="large" type="primary"
        @click="$router.push('/cartlist')"
        > 
           去购物车结算
        </el-button>
    </div>
 </div>

</div>
</template>


<style lang="scss" scoped>
.cart{
    width:50px;
    position:relative;
    z-index:600;
    .curr{
        height:32px;
        line-height:32px;
        text-align:center;
        position:relative;
        display:block;
      .icon-cart {
        font-size:22px;
        }

        em{
            font-style:normal;
            position:absolute;
            right:0;
            top:0;
            padding:1px 6px;
            line-height:1;
            background: $helpColor;
            color:#fff;
            font-size:12px;
            border-radius:10px;
            font-family:Arial;
        }
    }
  &:hover{
    .layer{
        opacity: 1;
        transform:none;
    }
  }

  .layer{
    opacity:0;
    transition:all 0.4s 0.2s;
    transform:translateY(-200px) scale(1,0);
    width:400px;
    height:400px;
    position:absolute;
    top:50px;
    right:0;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    background:#fff;
    border-radius:4px;
    padding-top:10px;

    &::before{
        content:"";
        position:absolute;
        right:14px;
        top:-10px;
        width:20px;
        height:20px;
        background: #fff;
        transform:scale(0.6,1) rotate(45deg);
        box-shadow:-3px -3px 5px rgba(0,0,0,0.1);
    }
    .foot {
        position:absolute;
        left:0;
        bottom:0px;
        height:70px;
        width:100%;
        padding:10px;
        display:flex;
        justify-content:space-between; 
        background: #f8f8f8;
      align-items: center;
    }

    .total{
        padding-left:10px;
        color:#999;
        p{
            &:last-child{
               font-size:18px;
               color:$priceColor; 
            }
        }
    }

  }

 .list{
    
 }

}
</style>