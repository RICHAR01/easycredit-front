import { fromJS } from 'immutable';

import {} from './constants';

const initialState = fromJS({

});

function topbarReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default topbarReducer;
