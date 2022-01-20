import axios from 'axios';
import { getToken } from '../util/getToken';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    'accept': 'application/json',
  },
  withCredentials: true,
});

//header 설정
api.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json; charset=utf-8';
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers['Accept'] = '*/*';
  config.headers['authorization'] = getToken();
  return config;
});

export const signUpApi = async (data) => {
  try {
    console.log(data);
    const res = await api.post('/users/signup', {
      email: data.email,
      name: data.name,
      password: data.password,
      passwordCheck: data.passwordCheck,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

export const loginApi = async (data) => {
  try {
    console.log(data);
    const res = await api.post('/users/signin', {
      email: data.email,
      password: data.password,
    });
    return res;
  } catch (err) {
    return err.response;
  }
};

export default api;
