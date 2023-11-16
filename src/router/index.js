import { createRouter, createWebHistory } from 'vue-router'
import ecommerceRoutes from './ecommerce';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: 'Admin' },
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/users',
      name: 'users',
      meta: { layout: 'Admin' },
      component: () => import('../views/UsersView.vue')
    },
    {
      path: '/roles',
      name: 'admin',
      meta: { layout: 'Admin' },
      component: () => import('../views/UsersView.vue')
    },
    ...ecommerceRoutes.routes,
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'Guest' },
      component: () => import('../views/Auth/LoginView.vue')
    }
  ]
})

export default router
