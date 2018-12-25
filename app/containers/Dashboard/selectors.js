import { createSelector } from 'reselect';

const selectDashboard = (state) => state.get('dashboard');

const makeSelectDashboard = () => createSelector(
  selectDashboard,
  (dashboardState) => dashboardState.get('dashboard')
);

const makeSelectLoading = () => createSelector(
  selectDashboard,
  (dashboardState) => dashboardState.get('loading')
);

const makeSelectError = () => createSelector(
  selectDashboard,
  (dashboardState) => dashboardState.get('error')
);

export {
  selectDashboard,
  makeSelectDashboard,
  makeSelectLoading,
  makeSelectError,
};
