import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import contenMain from '@/pages/contenMain'
import login from '@/pages/login/login'
import forbidden from "@/pages/forbidden"
import campaign from "@/pages/campaign/campaign"
import campaignEdit from "@/pages/campaign/edit"
import collection from "@/pages/collection/collection"
import eshop from "@/pages/eshop/eshop"
import moreinfo from "@/pages/moreinfo/moreinfo"
import porject from "@/pages/porject/porject"
import shop from "@/pages/shop/shop"
import press from "@/pages/press/press"


Vue.use(Router)
var routes = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'contenMain',
      component: contenMain,
      children: [
        { path: '/campaign', component: campaign, name: 'campaign'},
        { path: '/campaignEdit', component: campaignEdit, name: 'campaignEdit'},
        { path: '/collection', component: collection, name: 'collection' },
        { path: '/eshop', component: eshop, name: 'eshop' },
        { path: '/porject', component: porject, name: 'porject' },
        { path: '/moreinfo', component: moreinfo, name: 'moreinfo' },
        { path: '/shop', component: shop, name: 'shop' },
        { path: '/press', component: press, name: 'press' }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/forbidden',
      name: 'forbidden',
      component: forbidden
    },
    {
      path: '*',
      hidden: true,
      redirect: { path: '/forbidden' }
    }
  ]
})

routes.beforeEach(({meta, path}, from, next) => {
  const {auth = true} = meta   
  var isLogin = true
　　
　if (auth && !isLogin && path !== '/login') {  
　　　return next({ path: '/login' })  
　}
  
  next();
})



export default routes