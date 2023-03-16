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
    children: [
      {
        path: "/test",
        name: "test",
        meta: {
          isShow: true,
          title: "测试"
        },
        component: () => import('../views/testView.vue'),
        children: [
          {
            path: '/test2',
            name: 'test2',
            meta: {
              title: "测试2"
            },
            component: () => import('../views/test2/test2.vue'),
          },
          {
            path: '/test3',
            name: 'test3',
            meta: {
              title: "测试3"
            },
            component: () => import('../views/test3/test3.vue'),
          },
        ]
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
    ]
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
