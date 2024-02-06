import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import exampleFormKitVue from '@/pages/forms/exampleFormKit.vue'
import Examples from '@/pages/exmapleindex.vue'
import apiExample from '@/pages/examples/apiExample.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/example',
      component: Examples,
      children: [
        {
          path: 'formkit',
          component: exampleFormKitVue
        },
        {
          path: 'api',
          component: apiExample
        }
      ]
    }
  ]
})

export default router
