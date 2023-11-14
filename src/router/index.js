import { createRouter, createWebHistory } from 'vue-router'

import ecommerceRoutes from './ecommerce';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/UsersView.vue')
    },
    {
      path: '/roles',
      name: 'admin',
      component: () => import('../views/UsersView.vue')
    },
    ...ecommerceRoutes.routes
  ]
})

export default router
