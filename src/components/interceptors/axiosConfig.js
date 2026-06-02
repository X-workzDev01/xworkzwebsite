import axios from "axios";

const api = axios.create({
  timeout: 15000,
});

api.interceptors.response.use(
  (response) => response,

  (error) => {
    const status = error.response?.status;

    const isServerDown =
      !error.response ||
      status === 404 ||
      status === 502 ||
      status === 503 ||
      status === 504 ||
      status >= 500;

    if (isServerDown) {
      window.dispatchEvent(new CustomEvent("server-error"));
    }

    return Promise.reject(error);
  },
);

export default api;
