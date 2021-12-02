import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SubNav from "../components/SubNav"
import List from "../views/List";
import Item from "../views/Item";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default:Home,
      subNav: SubNav
    }
  },
  {
    path: '/about',
    name: 'About',
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      subNav: SubNav
    }
  },
  {
    path: '/list',
    name: 'List',
    components: {
      default: List,
      item: Item,
      subNav: SubNav
      }
  },
  {
    path: '/list/item-*',
    component: () => import(/* webpackChunkName: "about" */ '../views/Item.vue')
  }
  ,{
    path: '/contacts',
    name: 'Contacts',
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/Contacts.vue'),
      subNav: SubNav
    }
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
