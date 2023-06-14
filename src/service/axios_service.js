import axios from "axios";

// axios.defaults.baseURL = "http://5.75.172.111/api/v1/";
axios.defaults.baseURL = "http://5.75.172.111/api/v1/";
axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  function (config) {
    console.log("sadas");
    // axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
const http = axios.create({
  baseURL: "http://5.75.172.111/api/v1/",
  // baseURL: "http://5.75.172.111/api/v1/",
});

export default { http };
