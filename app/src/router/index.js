import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Error404 from '../views/Error404.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    alias: '/main',
    props: route => ({ auth: (route.query.auth ? route.query.auth : ''), _origin: (route.query._origin ? route.query._origin : '') })
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  },
  {
    path: '/playlist/:alias',
    name: 'Playlist',
    component: () => import(/* webpackChunkName: "playlist" */ '../views/Playlist.vue'),
    props: true
  },
  {
    path: '/tops',
    name: 'Tops',
    component: () => import(/* webpackChunkName: "tops" */ '../views/Tops.vue')
  },
  {
    path: '/subscriptions',
    name: 'Subscriptions',
    component: () => import(/* webpackChunkName: "subscriptions" */ '../views/Subscriptions.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue')
  },
  {
    path: '/watch:kpid',
    name: 'Watch',
    component: () => import(/* webpackChunkName: "watch" */ '../views/Watch.vue'),
    props: true
  },
  {
    path: '/welcome',
    name: 'Intro',
    component: () => import(/* webpackChunkName: "intro" */ '../views/Intro.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error404',
    component: Error404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          selector: 'top',
          behavior: 'smooth'
        })
      }, 500)
    })
  }
})

export default router
