import api from '../../api';

export const loginUser = (username) => {
  const requestBody = { username };
  return api.post('/users/login', requestBody)
         .then((response) => response.data);
};
