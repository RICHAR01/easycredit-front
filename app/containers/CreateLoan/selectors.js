import { createSelector } from 'reselect';

const selectCreateLoan = (state) => state.get('createLoan');

const makeSelectLoan = () => createSelector(
  selectCreateLoan,
  (createLoanState) => createLoanState.get('loan')
);

const makeSelectLoading = () => createSelector(
  selectCreateLoan,
  (createLoanState) => createLoanState.get('loading')
);

const makeSelectError = () => createSelector(
  selectCreateLoan,
  (createLoanState) => createLoanState.get('error')
);

export {
  selectCreateLoan,
  makeSelectLoan,
  makeSelectLoading,
  makeSelectError,
};
