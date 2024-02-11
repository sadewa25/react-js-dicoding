/**
 * @TODO: Define all the actions (creator) for the Threadss state
 */
import api from '../../utils/api';

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
    try {
      const Threads = await api.getAllThreads();
      dispatch(receiveThreadsActionCreator(Threads));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveThreadsActionCreator,
  asyncGetThreads,
};
