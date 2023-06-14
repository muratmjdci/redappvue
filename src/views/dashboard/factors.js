import axios from "axios";


export default {
  name: "get_factors",
  data() {
    return {
      data : [],
    }
  },
  methods: {
    get_factors() {
      axios
        .get("http://5.75.172.111/api/v1/factors")
        .then((r) => {
          this.data = r.data
          console.log(this.data)
        });
    }
  },
};
