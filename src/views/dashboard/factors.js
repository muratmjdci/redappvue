import axios from "axios";
import { response } from "express";


export default {
  name: "get_factors",
  methods: {
    get_factors() {
      axios
        .get("http://5.75.172.111/api/v1/factors")
        .then((r) => {
            this.rResponse = r
        });
    }
  },
};
