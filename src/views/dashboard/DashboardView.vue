<template>
  <form>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarExample01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <RouterLink to="/factors">
                <a class="nav-link">Factors</a>
              </RouterLink>
            </li>
            <li>
              <a class="btn btn-danger" @click="logOut">
                <h3 style="color: #ffffff">logout</h3>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </form>
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
