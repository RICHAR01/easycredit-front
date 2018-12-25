import { fromJS } from 'immutable';

import {
  SET_USER,
  UNSET_USER,
  RESTORE_USER_FROM_LOCALSTORAGE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  authorization: null,
  currentUsername: null,
  userData: {
    repositories: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      const authorization = action.userAuthentication.accessToken.token;
      const username = action.userAuthentication.username;
      const roleId = action.userAuthentication.roleId;
      localStorage.setItem('username', username);
      localStorage.setItem('roleId', roleId);
      localStorage.setItem('authorization', authorization);
      return state
        .set('currentUsername', username)
        .set('roleId', roleId)
        .set('authorization', authorization);
    }
    case UNSET_USER:
      localStorage.setItem('username', '');
      localStorage.setItem('roleId', '');
      localStorage.setItem('authorization', '');
      return state
        .set('currentUsername', null)
        .set('roleId', null)
        .set('authorization', null);
    case RESTORE_USER_FROM_LOCALSTORAGE:
      return state
        .set('currentUsername', localStorage.getItem('username'))
        .set('roleId', localStorage.getItem('roleId'))
        .set('authorization', localStorage.getItem('authorization'));
    default:
      return state;
  }
}

export default appReducer;
