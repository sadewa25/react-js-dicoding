import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

/**
 * @TODO: Define all the actions (creator) for the users state
 */
const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      await api.register({ name, email, password });
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading())
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncRegisterUser,
};
