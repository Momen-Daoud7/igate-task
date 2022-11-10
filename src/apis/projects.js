import axios from "axios";

const token = JSON.parse(localStorage.getItem("user"))
export default axios.create({
  baseURL: "http://dev.nejome.com/api",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token?.token}`,
  },
});
