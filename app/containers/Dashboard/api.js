import api from '../../api';

export const getDashboard = (authorization) => {
  const authorizationField = 'Authorization';
  const requestConfig = { headers: { [authorizationField]: authorization } };
  return api.get('/me/dashboard', {}, requestConfig)
         .then((response) => response.data);
};
