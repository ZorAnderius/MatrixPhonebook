import axios from 'axios';

export const instanceAuth = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});


export const setToken = token => {
  instanceAuth.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const deleteToken = () => {
  delete instanceAuth.defaults.headers.common['Authorization'];
};
