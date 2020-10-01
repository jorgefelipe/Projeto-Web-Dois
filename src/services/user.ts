import api from './base';

const login = (body: { email: string; password: string }) =>
  api.post('/api/login', body);

const createUser = (body: { email: string; password: string }) =>
  api.post('/api/register', body);

export { login, createUser };
