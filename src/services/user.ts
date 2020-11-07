import { INewUser } from 'models/User';

import api from './base';

const userLogin = (body: { email: string; password: string }) =>
  api.post('/authenticate', body);

const createUser = (body: INewUser) => api.post('/register', body);

export default { userLogin, createUser };
