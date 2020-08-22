import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    components: { default: Home, test: About }
  },
  {
    path: '/about',
    name: 'About',
    components: {
       default: About
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
