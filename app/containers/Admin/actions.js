import {
  GET_PENDING_LOANS,
  GET_PENDING_LOANS_SUCCESS,
  GET_PENDING_LOANS_FAIL,
  REJECT_LOAN,
  APPROVE_LOAN,
} from './constants';

export function getPendingLoans() {
  return {
    type: GET_PENDING_LOANS,
  };
}

export function getPendingLoansSuccess(pendingLoans) {
  return {
    type: GET_PENDING_LOANS_SUCCESS,
    pendingLoans,
  };
}

export function getPendingLoansFail() {
  return {
    type: GET_PENDING_LOANS_FAIL,
  };
}

export function rejectLoan(loanId) {
  return {
    type: REJECT_LOAN,
    loanId,
  };
}

export function approveLoan(loanId) {
  return {
    type: APPROVE_LOAN,
    loanId,
  };
}
