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

export default api;
