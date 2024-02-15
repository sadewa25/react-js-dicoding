/**
 * @TODO: Define all the actions (creator) for the Threadss state
 */
import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREADS: 'ADD_THREADS',
  TOGGLE_LIKE_THREADS: 'TOGGLE_LIKE_THREADS',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadsActionCreator(threads) {
  return {
    type: ActionType.ADD_THREADS,
    payload: {
      threads,
    },
  };
}

function asyncGetThreads() {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const Threads = await api.getAllThreads();
      dispatch(receiveThreadsActionCreator(Threads));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading())
  };
}

function asyncAddThreads({ title, body}) {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const threads = await api.createThread({ title, body });
      dispatch(addThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading())
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  asyncGetThreads,
  addThreadsActionCreator,
  asyncAddThreads
};
