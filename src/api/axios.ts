import axios from 'axios';
import { GITHUB_RAW_BASE_URL } from '../constants/api';

const axiosInstance = axios.create({
  baseURL: GITHUB_RAW_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    // You can add logic here to attach auth tokens
    // const token = await AsyncStorage.getItem('userToken');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // You can add logic here to handle global errors, e.g., token expiration
    // if (error.response.status === 401) {
    //   // Redirect to login or refresh token
    // }
    return Promise.reject(error);
  }
);

export default axiosInstance;
