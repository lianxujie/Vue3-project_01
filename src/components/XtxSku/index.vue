
<script setup>
import { watchEffect } from 'vue'
import getPowerSet from './power-set'
const spliter = '★'

//根据sku数据得到路径字典对象 
const getPathMap = (skus) => {
    const patHMap = {}
    if (skus && skus.length > 0) {
        skus.forEach(sku => {
            //1.过滤出有库存有效的sku
            if (sku.inventory) {
                //2.得到sku属性值数组
                const specs = sku.specs.map(spec => spec.valueName)
                //3.得到sku属性值数组的子集
                const powerSet = getPowerSet(specs)
                //4.设置给路径字典对象
                powerSetforEach(set => {
                    const key = set.join(spliter)

                    //如果没有就先初始化一个空数组
                    if (!pathMap[key]) {
                        pathMap[key] =[]
                    }
                    pathMap[key].push(sku.id)
                })
            }
        })
    }
}
</script>


<template>
    <div>

    </div>
</template>


<style lang="scss" scoped>

</style>