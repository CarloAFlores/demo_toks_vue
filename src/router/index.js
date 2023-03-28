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
    path:'/menu/:id',
    name:'menu',
    component:() => import('../views/Menu.vue')
  },
  {
    path:'/platillo',
    name:'platillo',
    component:()=> import('../views/Platillo.vue')
  },
  {
    path:'/subcategoria/:category/:subcategory',
    name:'subcategoria',
    component:()=> import('../views/Subcategoria.vue')
  },
  {
    path:'/producto/:producto_id',
    name:'producto',
    component:()=> import('../views/Articulo.vue')
  },
  {
    path:'/producto/:producto_id/:tiempo_id',
    name:'producto-pasos',
    component:() => import('../views/ArticuloPasos.vue')
  },
  {
    path:'/resumen',
    name: 'resumen',
    component: () => import('../views/ResumenOrden.vue')
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
