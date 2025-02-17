import { createRouter, createWebHistory } from 'vue-router';
import Reservations from '@/components/Reservations.vue';
import MenuItems from '@/components/MenuItems.vue';
import OrderItems from '@/components/OrderItems.vue';
import SignUp from '../components/SignUp.vue';
import Login from '../components/Login.vue';
import Dashboard from "../components/Dashboard.vue"


const routes = [
  {path: '/signup',name: 'SignUp',component: SignUp},
  {path: '/login',name: 'Login', component: Login},
  { path: "/dashboard", component: Dashboard },
  { path: '/reservations', component: Reservations },
  { path: '/menu-items', component: MenuItems },
  { path: '/order-items', component: OrderItems },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
