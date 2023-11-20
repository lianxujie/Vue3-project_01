<script setup>




import { ref } from 'vue'
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/userStore';

const userStore = useUserStore()


// 1.准备表单对象
const form = ref({
  account: '18610848230',
  password: '123456',
  agree: true
})


// 2.准备规则对象
const rules = {
  account: [
    {
      required: true, message: '用户名不能为空',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,message: '密码不能为空',
      trigger: 'blur'
    },
    {
      min: 6, max: 14, message: '密码长度为6-14位',
      trigger:'blur'
    },
  ],
  agree: [
    {
      validator: (rule, value, callback) => {
        console.log(value)
        //自定义校验逻辑
        //
        if (value) {
          callback()
        } else {
          callback(new Error('请勾选协议'))
        }
      }
    }
  ]
}


//获取form实例做统一校验
const formRef = ref(null)
const router = useRouter()
const doLogin = () => {
  const { account, password } = form.value
  //调用实例方法
  formRef.value.validate(async (valid) => {
    //valid:所有表单都通过校验 才为true
    console.log(valid)
    //以valid为判断条件 如果通过校验才执行登录逻辑
    if (valid) {
      //TODO LOGIN 
      await userStore.getUserInfo({
        account,
        password
      })
      //1.提示用户
      ElMessage({
        type: 'success', message: '登录成功'
       
      })
       //2.跳转首页 
      router.replace({path:'/'})

    }
  })
}

</script>


<template>
  <div>
    <header class="login-header">
      <div class="container m-top-20">
        <h1 class="logo">
          <RouterLink to="/">小兔鲜</RouterLink>
        </h1>
        <RouterLink class="entry" to="/">
          进入网站首页
          <i class="iconfont icon-angle-right"></i>
          <i class="iconfont icon-angle-right"></i>
        </RouterLink>
      </div>
    </header>
    <section class="login-section">
      <div class="wrapper">
        <nav>
          <a href="javascript:;">账户登录</a>
        </nav>
        <div class="account-box">
          <div class="form">
            <el-form ref="formRef" :model="form" :rules="rules" label-position="right" label-width="60px" status-icon>
              <el-form-item prop="account" label="账户">
                <el-input v-model="form.account" />
              </el-form-item>
              <el-form-item prop="password" label="密码">
                <el-input v-model="form.password" />
              </el-form-item>
              <el-form-item prop="agree" label-width="22px">
                <el-checkbox size="large" v-model="form.agree">
                  我已同意隐私条款和服务条款
                </el-checkbox>
              </el-form-item>
              <el-button size="large" class="subBtn" @click="doLogin">点击登录</el-button>
            </el-form>
          </div>
        </div>
      </div>
    </section>

    <footer class="login-footer">
      <div class="container">
        <p>
          <a href="javascript:;">关于我们</a>
          <a href="javascript:;">帮助中心</a>
          <a href="javascript:;">售后服务</a>
          <a href="javascript:;">配送与验收</a>
          <a href="javascript:;">商务合作</a>
          <a href="javascript:;">搜索推荐</a>
          <a href="javascript:;">友情链接</a>
        </p>
        <p>CopyRight &copy; 小兔鲜儿</p>
      </div>
    </footer>
  </div>
</template>



<style lang="scss" scoped>

</style>