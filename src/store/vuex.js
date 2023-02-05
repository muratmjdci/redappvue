import { createApp } from "vue";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export const store = createStore({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  state: {
    user: null,
    isLoggedIn: false,
    loginError: null,
    token: "",
    selectedFactor : Object,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.isLoggedIn = true;
      state.loginError = null;
    },
    setLoginError(state, error) {
      state.loginError = error;
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      state.loginError = null;
    },
    changeToken(state, val) {
      state.token = val;
      alert(state.token);
    },
    changeLoginStatus(state, val) {
      state.isLoggedIn = val;
    },
  },
  actions: {},
});
