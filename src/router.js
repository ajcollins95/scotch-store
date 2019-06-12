import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/admin',
      name: 'Admin',
      // Parent component
      component: () => import('./views/admin/Index.vue'),

      children: [
        {
          path: 'new',
          name: 'New',
          component: () => import('./views/admin/New.vue')
        },
        {
          path: '',
          name: 'Products',
          component: () => import('./views/admin/Products.vue')
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: () => import('./views/admin/Edit.vue')
        }
      ]


    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('./views/Cart.vue')
    },
  ],
});
