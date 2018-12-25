import { fromJS } from 'immutable';

import {
  CHANGE_AMOUNT,
  CHANGE_PAYMENTS_QUANTITY,
  CHANGE_HAS_CREDIT_CARD,
  CHANGE_AGE,
  CREATE_LOAN,
  CREATE_LOAN_SUCCESS,
  CREATE_LOAN_FAIL,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loan: {
    paymentsQuantity: 3,
    hasCreditCard: false,
  },
  loading: false,
  error: false,
});

function createLoanReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_AMOUNT: {
      const amount = action.amount;
      const numberRx = '[^0-9]';
      const fixedAmount = amount.replace(new RegExp(numberRx, 'g'), '');
      return state
        .setIn(['loan', 'amount'], fixedAmount);
    }
    case CHANGE_PAYMENTS_QUANTITY:
      return state
        .setIn(['loan', 'paymentsQuantity'], action.paymentsQuantity);
    case CHANGE_HAS_CREDIT_CARD:
      return state
        .setIn(['loan', 'hasCreditCard'], action.hasCreditCard);
    case CHANGE_AGE: {
      const age = action.age;
      const numberRegex = '[^0-9]';
      const fixedAge = age.replace(new RegExp(numberRegex, 'g'), '');
      return state
        .setIn(['loan', 'age'], fixedAge);
    }
    case CREATE_LOAN:
      return state
       .set('loading', true)
       .set('error', false);
    case CREATE_LOAN_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false);
    case CREATE_LOAN_FAIL:
      return state
        .set('loading', false)
        .set('error', true);
    default:
      return state;
  }
}

export default createLoanReducer;
