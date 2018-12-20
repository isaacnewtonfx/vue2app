import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Coins from './views/Coins.vue'
import ChildView from "./components/ChildView.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/coins/:id',
      name: 'coins',
      component: Coins,
      children: [{
        path: "childview",
        component: ChildView
      }]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
