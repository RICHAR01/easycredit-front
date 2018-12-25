import { call, put, select, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router/immutable';
import { GET_DASHBOARD } from './constants';
import { getDashboardSuccess, getDashboardFail } from './actions';
import { makeSelectUserAuthorization } from '../App/selectors';
import * as api from './api';

export function* getDashboard() {
  const authorization = yield select(makeSelectUserAuthorization());

  if (!authorization) {
    yield put(push('/login')); // eslint-disable-line react/prefer-stateless-function
    location.reload();
    return;
  }

  try {
    const dashboard = yield call(api.getDashboard, authorization);
    if (dashboard) {
      yield put(getDashboardSuccess(dashboard));
    } else {
      yield put(getDashboardFail());
    }
  } catch (error) {
    yield put(getDashboardFail());
  }
}


export default function* dashboardData() {
  yield takeLatest(GET_DASHBOARD, getDashboard);
}
