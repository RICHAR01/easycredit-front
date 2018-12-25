import {
  CHANGE_AMOUNT,
  CHANGE_PAYMENTS_QUANTITY,
  CHANGE_HAS_CREDIT_CARD,
  CHANGE_AGE,
  CREATE_LOAN,
  CREATE_LOAN_SUCCESS,
  CREATE_LOAN_FAIL,
} from './constants';


export function changeAmount(amount) {
  return {
    type: CHANGE_AMOUNT,
    amount,
  };
}

export function changePaymentsQuantity(paymentsQuantity) {
  return {
    type: CHANGE_PAYMENTS_QUANTITY,
    paymentsQuantity,
  };
}

export function changeHasCreditCard(hasCreditCard) {
  return {
    type: CHANGE_HAS_CREDIT_CARD,
    hasCreditCard,
  };
}

export function changeAge(age) {
  return {
    type: CHANGE_AGE,
    age,
  };
}

export function createLoan() {
  return {
    type: CREATE_LOAN,
  };
}

export function createLoanSuccess(loan) {
  return {
    type: CREATE_LOAN_SUCCESS,
    loan,
  };
}

export function createLoanFail() {
  return {
    type: CREATE_LOAN_FAIL,
  };
}
