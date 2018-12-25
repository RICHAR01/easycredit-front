import { fromJS } from 'immutable';

import {
  GET_DASHBOARD,
  GET_DASHBOARD_SUCCESS,
  GET_DASHBOARD_FAIL,
} from './constants';

const initialState = fromJS({
  dashboard: null,
  loading: true,
  error: false,
});

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DASHBOARD:
      return state
      .set('loading', true)
      .set('error', false);
    case GET_DASHBOARD_SUCCESS:
      return state
      .set('dashboard', action.dashboard)
      .set('loading', false)
      .set('error', false);
    case GET_DASHBOARD_FAIL:
      return state
      .set('loading', false)
      .set('error', true);
    default:
      return state;
  }
}

export default dashboardReducer;
