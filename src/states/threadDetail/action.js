/**
 * @TODO: Define all the actions (creator) for the Threadss state
 */
import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

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

function addThreadDetailActionCreator(status) {
  return {
    type: ActionType.ADD_THREAD_DETAIL,
    payload: []
  };
}

function asyncGetThreadDetail({id}) {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const detailThread = await api.getThreadDetail({id});
      dispatch(receiveThreadDetailActionCreator(detailThread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading())
  };
}

function asyncAddThreadDetail({ id, content }) {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const threads = await api.createThreadDetail({ id, content });
      dispatch(addThreadDetailActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading())
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  asyncGetThreadDetail,
  addThreadDetailActionCreator,
  asyncAddThreadDetail
};
