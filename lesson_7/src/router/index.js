import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SubNav from "../../../lesson_6/src/components/SubNav";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import(/* webpackChunkName: "about" */ '../views/Counter.vue')
  },
  {
    path: '/posts',
    name: 'Posts',
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/Posts.vue'),
      subNav: SubNav
    }
  },
  {
    path: '/posts/*',
    component: () => import(/* webpackChunkName: "about" */ '../views/Post.vue')
  },
  {
    path: '/users/*',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
