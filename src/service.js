import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/", //url base da sua api
});

export default api;
