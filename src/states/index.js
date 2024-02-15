/**
 * @TODO: Create Redux store
 */
import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer'
import usersReducer from './users/reducer';

import { loadingBarReducer } from 'react-redux-loading-bar';
import threadsReducer from './threads/reducer';
import detailThreadReducer from './threadDetail/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    loadingBar: loadingBarReducer,
    threads: threadsReducer,
    detailThread: detailThreadReducer
  },
});

export default store;
