import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StoreView from '../views/StoreView.vue'
import ShopView from '../views/ShopView.vue'
import BookView from '../views/BookView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/book/:id',
    name: 'book',
    props: (route) => ({
      id: route.params.id,
  }),
    component: BookView
  },
  {
    path: '/store',
    name: 'store',
    
    component: StoreView
  },
  {
    path: '/shopbook/:id',
    name: 'shop',
    props: (route) => ({
      id: route.params.id,
  }),
    component: ShopView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
