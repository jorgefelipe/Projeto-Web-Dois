import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://projeto-backend-tres.herokuapp.com/',
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
