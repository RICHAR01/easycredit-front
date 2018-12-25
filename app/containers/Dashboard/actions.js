import {
  GET_DASHBOARD,
  GET_DASHBOARD_SUCCESS,
  GET_DASHBOARD_FAIL,
  GO_TO_LOGIN,
} from './constants';

export function getDashboard() {
  return {
    type: GET_DASHBOARD,
  };
}

export function getDashboardSuccess(dashboard) {
  return {
    type: GET_DASHBOARD_SUCCESS,
    dashboard,
  };
}

export function getDashboardFail() {
  return {
    type: GET_DASHBOARD_FAIL,
  };
}

export function goToLogin() {
  return {
    type: GO_TO_LOGIN,
  };
}
