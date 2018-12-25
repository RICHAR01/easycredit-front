import { fromJS } from 'immutable';

import {
  CHANGE_USERNAME,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  username: '',
  loading: false,
  error: false,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state
      .set('username', action.name)
      .set('error', false);

    case LOGIN_USER:
      return state
      .set('loading', true)
      .set('error', false);

    case LOGIN_USER_SUCCESS:
      return state
      .set('loading', false)
      .set('error', false);

    case LOGIN_USER_FAIL:
      return state
      .set('loading', false)
      .set('error', true);

    default:
      return state;
  }
}

export default loginReducer;
