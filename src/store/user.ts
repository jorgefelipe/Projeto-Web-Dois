import { AnyAction } from 'redux';

import { IUser } from 'models/User';

export const userTypes = {
  SET_USER_DATA: 'user/ set user data',

  USER_LOGOUT: 'user/ user logout',

};

export interface UserState {
  user: IUser
}

const initialState: UserState = {
  user: {
    email: '',
    name: '',
  },
};

export default function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case userTypes.SET_USER_DATA:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export const setUserData = (user: IUser) => ({
  type: userTypes.SET_USER_DATA,
  payload: user
});

export const userLogout = () => ({
  type: userTypes.USER_LOGOUT
});
