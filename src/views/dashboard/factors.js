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
        .get("http://3.68.231.168/api/v1/factors")
        .then((r) => {
          this.data = r.data
          console.log(this.data)
        });
    }
  },
};
