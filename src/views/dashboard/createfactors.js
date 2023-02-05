import axios from "axios";

export default {
  name: "create_factor",
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
      axios.defaults.headers.common["Authorization"] = "Bearer " + this.$store.token
      axios
        .post("http://3.68.231.168/api/v1/user/factors", {
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
