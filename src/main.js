import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Login from "./views/login/LoginView.vue";
import Dashboard from "./views/dashboard/DashboardView.vue";
import Factors from "./views/dashboard/FactorsView.vue";
import EditFactors from "./views/dashboard/EditUpdateFactor.vue";
import Faq from "./views/dashboard/faq/FaqView.vue";
import Settings from "./views/dashboard/settings/SettingsView.vue";
import Users from "./views/dashboard/users/UsersView.vue";
import EditFaq from "./views/dashboard/faq/EditUpdateFaq.vue";

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
    {
      path: "/factors",
      component: Factors,
      beforeEnter: (to, from, next) => {
        if (!store.state.isLoggedIn) {
          next({ path: "/login" });
        } else {
          next();
        }
      },
    },
    {
      path: "/faq",
      component: Faq,
      beforeEnter: (to, from, next) => {
        if (!store.state.isLoggedIn) {
          next({ path: "/login" });
        } else {
          next();
        }
      },
    },
    {
      path: "/users",
      component: Users,
      beforeEnter: (to, from, next) => {
        if (!store.state.isLoggedIn) {
          next({ path: "/login" });
        } else {
          next();
        }
      },
    },
    {
      path: "/settings",
      component: Settings,
      beforeEnter: (to, from, next) => {
        if (!store.state.isLoggedIn) {
          next({ path: "/login" });
        } else {
          next();
        }
      },
    },
    {
      path: "/editfaq",
      component: EditFaq,
      beforeEnter: (to, from, next) => {
        if (!store.state.isLoggedIn) {
          next({ path: "/login" });
        } else {
          next();
        }
      },
    },
    {
      path: "/editFactor",
      name: "editfactor",

      component: EditFactors,
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
