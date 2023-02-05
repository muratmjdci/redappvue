<script setup>
import HelloWorld from './components/HelloWorld.vue'
import LoginView from './views/login/LoginView.vue'
</script>

<script>

import { store } from './store/vuex';
export default {
  data() {
    return {
      isLogin: store.state.isLogin
    }
  },

}</script>
<template>
  <div>
    <router-view />
  </div>
</template>

