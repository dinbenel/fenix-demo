import axios from 'axios';
import {config} from '../config';

export const axiosClient = axios.create({
  baseURL: config.baseUrl,
  timeout: config.timeout,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

axiosClient.interceptors.request.use(function (config) {
  // IN CASE THE APP NEEDS TO SEND JWT
  //   if (token) {
  //     config.headers.Authorization = `Bearer ${token}`;
  //   }
  return config;
});

axiosClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // all error codes use cases
    if (!error || (error.response && error.response.status === 401)) {
    }
    return Promise.reject(error);
  },
);
