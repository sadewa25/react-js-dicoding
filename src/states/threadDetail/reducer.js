/**
 * @TODO: Define the reducer for the talks state
 */
import { ActionType } from './action';

function detailThreadReducer(detailThread = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.detailThread;
    case ActionType.ADD_THREAD_DETAIL:
      return [];
    default:
      return detailThread;
  }
}

export default detailThreadReducer;
