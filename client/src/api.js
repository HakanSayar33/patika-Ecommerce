import axios from "axios";

const url = process.env.REACT_APP_BASE_ENDPOINT;

axios.interceptors.request.use(
  function (config) {
    const { origin } = new URL(config.url);
    const allowedOrigins = [url];
    const token = localStorage.getItem("access-token");

    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = token;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export const fetchProductList = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(`${url}product?page=${pageParam}`);

  return data;
};

export const fetchProduct = async (id) => {
  const { data } = await axios.get(`${url}product/${id}`);

  return data;
};

export const fetchRegister = async (input) => {
  const { data } = await axios.post(`${url}auth/register`, input);

  return data;
};

export const fetchMe = async () => {
  const { data } = await axios.get(`${url}auth/me`);

  return data;
};

export const fetchLogout = async () => {
  const { data } = await axios.post(`${url}auth/logout`, {
    refresh_token: localStorage.getItem("refresh-token"),
  });
  return data;
};