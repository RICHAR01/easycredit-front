import {
  CHANGE_USERNAME,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from './constants';

export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}

export function loginUser() {
  return {
    type: LOGIN_USER,
  };
}

export function loginUserSuccess() {
  return {
    type: LOGIN_USER_SUCCESS,
  };
}

export function loginUserFail() {
  return {
    type: LOGIN_USER_FAIL,
  };
}
