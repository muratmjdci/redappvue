import { createApp } from "vue";
import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate';
export const store = createStore({
  plugins: [
     createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  state() {
    return {
      token: "",
      isLogin: false,
    };
  },
  mutations: {
    changeToken(state, val) {
      state.token = val;
    },
    changeLoginStatus(state, val) {
      state.isLogin = val;
    },
  },
});
