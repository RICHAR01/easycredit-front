import { createSelector } from 'reselect';

const selectAdmin = (state) => state.get('admin');

const makeSelectPendingLoans = () => createSelector(
  selectAdmin,
  (adminState) => adminState.get('pendingLoans')
);

const makeSelectLoading = () => createSelector(
  selectAdmin,
  (adminState) => adminState.get('loading')
);

const makeSelectError = () => createSelector(
  selectAdmin,
  (adminState) => adminState.get('error')
);

export {
  selectAdmin,
  makeSelectPendingLoans,
  makeSelectLoading,
  makeSelectError,
};
