/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectCurrentUsername = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentUsername')
);

const makeSelectUserRoleId = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('roleId')
);

const makeSelectUserAuthorization = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('authorization')
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

export {
  selectGlobal,
  makeSelectCurrentUsername,
  makeSelectUserRoleId,
  makeSelectUserAuthorization,
  makeSelectLocation,
};
