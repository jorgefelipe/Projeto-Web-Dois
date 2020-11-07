import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.BASE_URL || 'http://127.0.0.1:3333',
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('@reactjsToken');
  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
    headers.Accept = 'application/json';
  }

  return { ...config, headers };
});

export default instance;
