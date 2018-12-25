import api from '../../api';

export const createLoan = (loan, authorization) => {
  const authorizationField = 'Authorization';
  const requestConfig = { headers: { [authorizationField]: authorization } };
  return api.post('/me/loans', loan, requestConfig)
         .then((response) => response.data);
};
