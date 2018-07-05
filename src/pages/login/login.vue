<template>
  <div class="login">
    <div class="loginMain">
     
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item>
             <div class="loginTitle">登录</div> 
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.pws" type="password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="large" @click="onSubmit">立即登录</el-button>
          </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
import './login.less'
export default {
  name: 'login',
  data () {
    return {
      form:{
        name:"",
        pws:"",
      }
    }
  },
  beforeCreate(){
  },
  methods:{
    onSubmit(){
      this.$router.push({path:"/contenMain"})
    }
  }

}
</script>
