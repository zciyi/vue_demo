<template>
   <div class="P-layout">
        <top-header></top-header>
        <el-row :gutter="20" class="P-layoutMain">
            <el-col :span="4" class="P-layoutNav">
                <nav-list></nav-list>
            </el-col>
            <el-col :span="20" class="P-layoutCon">
                <transition name="fade"
                  mode="out-in">
                  <router-view></router-view>
                </transition>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import NavMenu from '@/components/NavMenu'
import TopHeader from '@/components/header'
export default {
  name: 'contenMain',
  data () {
    return {
      msg: 'Wel'
    }
  },
  components:{
    "navList":NavMenu,
     "topHeader":TopHeader
  }
}
</script>
