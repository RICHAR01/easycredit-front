import { call, put, select, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router/immutable';
import { setUser } from 'containers/App/actions';
import { LOGIN_USER } from './constants';
import { loginUserSuccess, loginUserFail } from './actions';
import { makeSelectUsername } from './selectors';
import * as api from './api';

export function* loginUser() {
  const username = yield select(makeSelectUsername());
  try {
    const userAuthentication = yield call(api.loginUser, username);
    if (userAuthentication) {
      yield put(setUser(userAuthentication));
      yield put(loginUserSuccess());

      const ADMIN_ROLEID = 2;
      if (userAuthentication.roleId === ADMIN_ROLEID) {
        yield put(push('/admin'));
      } else {
        yield put(push('/dashboard'));
      }
      location.reload();
    } else {
      yield put(loginUserFail());
    }
  } catch (err) {
    yield put(loginUserFail(err));
  }
}

export default function* githubData() {
  yield takeLatest(LOGIN_USER, loginUser);
}
