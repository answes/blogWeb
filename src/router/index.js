import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import ArtileDetails from  '../page/ArtileDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path:'/content',
      name:'content',
      component:ArtileDetails
    }
  ]
})
