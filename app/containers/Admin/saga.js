import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_PENDING_LOANS, REJECT_LOAN, APPROVE_LOAN } from './constants';
import { getPendingLoans as getPendingLoansAction,
         getPendingLoansSuccess, getPendingLoansFail } from './actions';
import * as api from './api';

export function* getPendingLoans() {
  try {
    const pendingLoans = yield call(api.getPendingLoans);
    if (pendingLoans) {
      yield put(getPendingLoansSuccess(pendingLoans));
    } else {
      yield put(getPendingLoansFail());
    }
  } catch (error) {
    yield put(getPendingLoansFail());
  }
}

export function* rejectLoan(action) {
  const loanId = action.loanId;
  const isRejected = yield call(api.rejectLoan, loanId);
  if (isRejected) {
    yield put(getPendingLoansAction(loanId));
  }
}

export function* approveLoan(action) {
  const loanId = action.loanId;
  const isApproved = yield call(api.approveLoan, loanId);
  if (isApproved) {
    yield put(getPendingLoansAction());
  }
}

export default function* loanData() {
  yield takeLatest(GET_PENDING_LOANS, getPendingLoans);
  yield takeLatest(REJECT_LOAN, rejectLoan);
  yield takeLatest(APPROVE_LOAN, approveLoan);
}
