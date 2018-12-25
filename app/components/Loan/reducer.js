import { fromJS } from 'immutable';

const initialState = fromJS({});

function loanReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default loanReducer;
