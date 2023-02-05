import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      axios
        .post("http://5.75.172.111/api/v1/user/login", {
          email: this.input.username,
          password: this.input.password,
        })
        .then((r) => {
          if (r.status == 200) {
            axios.defaults.headers.common["Authorization"] =
              "Bearer " + r.data.access_token;
            this.$store.commit("changeToken", 'Bearer ' + r.data.access_token);
            this.$store.commit("changeLoginStatus", true);
            console.log(this.$store.state);
            console.log(axios.defaults.headers.common);
            this.$router.push("/dashboard");
          }
        });
    },
  },
};
