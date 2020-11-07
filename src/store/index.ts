import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import post, { PostState } from './post';
import user, { UserState, userTypes } from './user';

const reducers = combineReducers({
  user,
  post,
});

export interface RootState {
  user: UserState,
  post: PostState
}

const rootReducer = (state: any, action: any) => {
  if (action.type === userTypes.USER_LOGOUT) {
    localStorage.removeItem('@reactjsToken');
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return reducers(state, action);
};

const persistConfig = {
  key: 'reactjswebprojeto',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
