import axios from "axios";
const apiKey = import.meta.env.VITE_API_KEY;

const axiosClient = axios.create({
  baseURL: `https://v6.exchangerate-api.com/v6/${apiKey}`,

  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;