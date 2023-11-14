export default {
  routes: [
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/Ecommerce/ProductListingView.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/Ecommerce/CategoriesListingView.vue')
    },
  ]
};
