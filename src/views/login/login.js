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
        .post("http://3.68.231.168/api/v1/user/login", {
          email: this.input.username,
          password: this.input.password,
        })
        .then((r) => {
          if (r.status == 200) {
            axios.defaults.headers.common["Authorization"] =
              "Bearer " + r.data.access_token;
            console.log(axios.defaults.headers.common);
          }
        });
    },
  },
};
