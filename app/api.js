import { create } from 'apisauce';

const baseURL = process.env.NODE_ENV === 'production' ?
                'https://easycredit-api.com' : 'http://0.0.0.0:4000/api/';

const api = create({
  baseURL,
});

export default api;
