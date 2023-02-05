import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Login from "./views/login/LoginView.vue";
import Dashboard from "./views/dashboard/DashboardView.vue";
import { store } from "./store/vuex";

const router = new createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
    },
    {
      path: "/login",
      component: Login,
      beforeEnter: (to, from, next) => {
        if (store.state.isLoggedIn) {
          next({ path: "/dashboard" });
        } else {
          next();
        }
      },
    },
    {
      path: "/dashboard",
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        if (!store.state.isLoggedIn) {
          next({ path: "/login" });
        } else {
          next();
        }
      },
    },
  ],
});

createApp(App).use(store).use(router).mount("#app");
