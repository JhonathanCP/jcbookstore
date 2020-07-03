import Vue from 'vue'
import VueRouter from 'vue-router'
import { LoginRoutes } from '@/modules/login/routes'
import { AuthorRoutes } from '@/modules/author/routes'
import HomePage from '@/pages/Home'
import store from '../store'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      component: HomePage,
      meta: {
        requiresAuth: true,
      }
    },
    ...LoginRoutes,
    ...AuthorRoutes,
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) =>{
  if(to.matched.some(record => record.meta.requiresAuth)){/* match retorna todas las metaetiquetas */
    if(store.getters['login/isUserConnected']){
      next()
      return
    }
    next('/signin')
  } else {
    next()
  }
})

export default router
