import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  //   meta: {
  //     isShow: false,
  //     title: "主页"
  //   },
  // },
  // {
  //   name: 'meter_Reading_Management',

  // },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "主页"
    },
  },
  {
    path: "/test",
    name: "test",
    meta: {
      isShow: true,
      title: "测试"
    },
    component: () => import('../views/testView.vue'),
  },
  {
    path: '/meter_Category',
    name: 'meter_Category',
    meta: {
      title: "测试2"
    },
    component: () => import('../views/meter_Category/meter_Category.vue'),
  },
  {
    path: '/accounting_Archives',
    name: 'accounting_Archives',
    meta: {
      title: "表计档案管理"
    },
    component: () => import('../views/accounting_Archives/accounting_Archives.vue'),
  },
  {
    path: '/charge_Homepage',
    name: 'charge_Homepage',
    meta: {
      isShow: true,
      title: "收费主页"
    },
    component: () => import('../views/charge_Homepage/charge_Homepage.vue'),
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      isShow: false,
      title: "关于"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      isShow: false,
      title: "登录"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
