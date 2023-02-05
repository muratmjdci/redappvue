<script setup>
import HeaderView from '../../components/Header.vue'
</script>

<template>
  <HeaderView/>
  <RouterView />
</template>

<script>
export default {
  methods: {
    logOut() {
      // console.log(this.$store.state)
      this.$store.commit("logout");
      this.$router.push("login");
    },
  },
};
</script>
