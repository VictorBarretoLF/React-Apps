import axios from "axios";

const baseURL = "http://127.0.0.1:5000/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
});

export default axiosInstance;