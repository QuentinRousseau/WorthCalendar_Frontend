import AppointmentsView from '@/views/AppointmentsView.vue'
import TestBackend from '@/views/TestBackend.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/test-backend',
      name: 'test-backend',

      component: TestBackend,
    },
    {
      path: '/appointments',
      name: 'appointments',

      component: AppointmentsView,
    },
  ],
})

export default router
