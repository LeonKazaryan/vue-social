import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home,
    meta: {}
  },

  {
    path: '/about',
    name: 'AboutPage',
    component: () => import('@/views/About.vue'),
    meta: {}
  },

  {
    path: "/auth",
    name: 'AuthPage',
    component: () => import('@/views/Auth.vue'),
    meta: {
      layout: 'AuthLayout',
      notRequireAuth: true
    }
  }
];


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.notRequireAuth) return next();    //next пропустит дальше
  if (!store.state.user){
    const user = localStorage.getItem('user')
    if (!user) return next({name: 'AuthPage'})  //если нет юзера, то кидает на ауф пейдж
  }
  next();
})

export default router
