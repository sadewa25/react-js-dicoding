/**
 * @TODO: Define the reducer for the talks state
 */
import { ActionType } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.ADD_THREADS:
      return [action.payload.threads, ...threads];
    default:
      return threads;
  }
}

export default threadsReducer;
