import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue';
import Dashboard from '../views/dashboard.vue';
const routes = [
  {
    path: '/',
    redirect: '/login', // Default redirect to login page
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }, // Protect this route
  },
  // validation 2
  {
    path: "/login-2",
    name: "custom-login",
    component: () => import('../views/second-validation/login.vue')
  },
  {
    path: "/dashboard-2",
    name: "custom-dashboard",
    component: () => import('../views/second-validation/dashboard.vue')
  }
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Navigation guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router
