import { call, put, select, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router/immutable';
import { CREATE_LOAN } from './constants';
import { createLoanSuccess, createLoanFail } from './actions';
import { makeSelectUserAuthorization } from '../App/selectors';
import { makeSelectLoan } from './selectors';

import * as api from './api';

export function* createLoan() {
  const loan = yield select(makeSelectLoan());
  const authorization = yield select(makeSelectUserAuthorization());

  try {
    const newLoan = yield call(api.createLoan, loan, authorization);
    if (newLoan) {
      yield put(createLoanSuccess(newLoan));
      yield put(push('/dashboard'));
      location.reload();
    } else {
      yield put(createLoanFail());
    }
  } catch (err) {
    yield put(createLoanFail(err));
  }
}

export default function* githubData() {
  yield takeLatest(CREATE_LOAN, createLoan);
}
