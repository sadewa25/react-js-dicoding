/**
 * @TODO: Define all the actions (creator) for the Threadss state
 */
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  ADD_THREAD_DETAIL: 'ADD_THREAD_DETAIL',
};

function receiveThreadDetailActionCreator(detailThread) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      detailThread,
    },
  };
}

function addThreadDetailActionCreator(threads) {
  return {
    type: ActionType.ADD_THREAD_DETAIL,
    payload: {
      detailThread,
    },
  };
}

function asyncGetThreadDetail({id}) {
  return async (dispatch) => {
    try {
      const detailThread = await api.getThreadDetail({id});
      dispatch(receiveThreadDetailActionCreator(detailThread));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncAddThreads({ title, body}) {
  return async (dispatch) => {
    try {
      const threads = await api.createThread({ title, body });
      dispatch(addThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  asyncGetThreadDetail
};
