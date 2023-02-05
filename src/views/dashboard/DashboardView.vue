
<template>
  <form>

    <nav>
      <RouterLink to="/factors">
        <h1>
          Factor
        </h1>
      </RouterLink>
      <a @click="logOut">
        <h1>
          logout
        </h1>
      </a>
    </nav>

  </form>
  <RouterView />
</template>


<script>

export default {
  methods: {
    logOut() {
      // console.log(this.$store.state)
      this.$store.commit('logout')
      this.$router.push('login')
    }
  }
}
</script>
