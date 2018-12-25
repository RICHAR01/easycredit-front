import { createSelector } from 'reselect';

const selectLogin = (state) => state.get('login');

const makeSelectUsername = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('username')
);

const makeSelectLoading = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('loading')
);

const makeSelectError = () => createSelector(
  selectLogin,
  (loginState) => loginState.get('error')
);

export {
  selectLogin,
  makeSelectUsername,
  makeSelectLoading,
  makeSelectError,
};
