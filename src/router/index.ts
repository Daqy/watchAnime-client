import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/anime'
  },
  {
    path: '/anime',
    name: 'list-anime',
    component: () => import('@/views/anime-list.vue')
  },
  {
    path: '/anime/:name',
    name: 'anime-info',
    component: () => import('@/views/anime-info.vue')
  },
  {
    path: '/anime/watch/:anime',
    name: 'watch-episode',
    component: () => import('@/views/anime-player.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
