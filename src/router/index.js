import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/login/LoginView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/dashboard/DashboardView.vue"),
    },
    {
      path: "/factors",
      name: "factors",
      component: () => import("../views/dashboard/FactorsView.vue"),
    },
    {
      path: "/create_factor",
      name: "create_factor",
      component: () => import("../views/dashboard/CreateFactorView.vue"),
    },
    {
      path: "/withdraw",
      name: "withdraw",
      component: () => import("../views/dashboard/withdraw/WithdrawView.vue"),
    }
  ],
});

export default router;
