import axios_service from "../../service/axios_service"

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
      axios_service.http
        .post("user/login", {
          email: this.input.username,
          password: this.input.password,
        })
        .then((r) => {
          if (r.status == 200) {
            // this.$store.commit("changeToken", 'Bearer ' + r.data.access_token);
            // this.$store.token = 'Bearer ' + r.data.access_token;
            this.$store.commit("changeLoginStatus", true);
            localStorage.setItem("token", r.data.access_token)
            console.log(this.$store.state);
            this.$router.push("/dashboard");
          }
        });
    },
  },
};
