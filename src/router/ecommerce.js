export default {
  routes: [
    {
      path: '/products',
      name: 'products',
      meta: { layout: 'Admin' },
      component: () => import('../views/Ecommerce/ProductListingView.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      meta: { layout: 'Admin' },
      component: () => import('../views/Ecommerce/CategoriesListingView.vue')
    },
    {
      path: '/stores',
      name: 'stores',
      meta: { layout: 'Admin' },
      component: () => import('../views/Ecommerce/StoresListingView.vue')
    },
  ]
};
