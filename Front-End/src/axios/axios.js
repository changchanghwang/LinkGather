import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
  withCredentials: true,
});

const getToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return `Bearer ${token}`;
  } else {
    return null;
  }
};

api.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json; charset=utf-8';
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers['Accept'] = '*/*';
  config.headers['authorization'] = getToken();
  return config;
});

export default api;
