
<template>
  <div class="M-navMenu">
    <el-menu router default-active="this.$route.path"  @open="handleOpen" @close="handleClose" v-for ='n in nav'>
      <el-submenu index="$index" v-if='n.subNav'>
        <template slot="title">{{n.text}}</template>
        <el-menu-item  v-for='(l,key) in n.subNav' :index="l.path" >{{l.text}}</el-menu-item>
      </el-submenu>
      <el-menu-item v-if='!n.subNav' :index="n.path" ><span>{{n.text}}</span></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import './NavMenu.less'
  export default {
    name:"NavMenu",
    data(){
        return {
          nav:[{
            text:"campaign",
            path:"/campaign"
          },{
            text:"collection",
            path:"/collection",
            subNav:[{
              text:"collection管理",
              path:"/collection",
            },{
              text:"选项1",
              path:"/",
            }]
          },{
            text:"eshop",
            path:"/eshop"
          },{
            text:"moreinfo",
            path:"/moreinfo"
          },{
            text:"porject",
            path:"/porject"
          },{
            text:"shop",
            path:"/shop"
          },{
            text:"press",
            path:"/press"
          }]
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }

    }
  }
</script>