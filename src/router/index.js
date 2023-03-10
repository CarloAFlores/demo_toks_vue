import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Seleccion.vue')
  },
  {
    path: '/seleccion',
    name: 'seleccion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Seleccion.vue')
  },
  {
    path:'/menu',
    name:'menu',
    component:() => import('../views/Menu.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
