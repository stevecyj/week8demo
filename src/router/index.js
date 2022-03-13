import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'FrontView',
    component: () => import('../views/FrontStage/FrontView.vue'),
    children: [
      {
        path: '/',
        name: 'Index',
        component: () => import('../views/FrontStage/IndexView.vue'),
      },
      {
        path: '/products',
        name: 'products',
        component: () => import('../views/ProductsView.vue'),
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('../views/ProductView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
