import { fromJS } from 'immutable';

import {
  GET_PENDING_LOANS,
  GET_PENDING_LOANS_SUCCESS,
  GET_PENDING_LOANS_FAIL,
} from './constants';

const initialState = fromJS({
  pendingLoans: [],
  loading: true,
  error: false,
});

function adminReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PENDING_LOANS:
      return state
      .set('loading', true)
      .set('error', false);
    case GET_PENDING_LOANS_SUCCESS:
      return state
      .set('pendingLoans', action.pendingLoans)
      .set('loading', false)
      .set('error', false);
    case GET_PENDING_LOANS_FAIL:
      return state
      .set('loading', false)
      .set('error', true);
    default:
      return state;
  }
}

export default adminReducer;
