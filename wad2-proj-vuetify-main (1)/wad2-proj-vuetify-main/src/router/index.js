// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/views/Profile.vue'),
      },
      {
        path: 'register',
        name: 'NewUser',
        component: () => import('@/views/NewUser.vue'),
      },
    ],
  },
  {
    path: '/login/',
    component: () => import('@/layouts/Logged_In/Log_In.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'medication-search',
        name: 'medication search',
        component: () => import('@/views/Search.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;


