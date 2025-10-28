


import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "https://online-bookstore-backend-4bsl.onrender.com/";

const instance = axios.create({
  baseURL,
  withCredentials: true,
});

// Attach token automatically as Bearer
instance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers = config.headers || {};
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default instance;