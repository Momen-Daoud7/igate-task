import axios from "axios";

export default axios.create({
  baseURL: "http://dev.nejome.com/api",
  headers: {
    Accept: "application/json",
  },
});
