import { deleteToken, instanceAuth, setToken } from './api';

const STORAGE_KEY = 'token';

const setTokenToStorage = token => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(token));
};

export const signUp = async body => {
  console.log('body', body);
  const { data } = await instanceAuth.post('/users/signup', body);
  setToken(data.token);
  setTokenToStorage(data.token);
  return data;
};

export const login = async body => {
  const { data } = await instanceAuth.post('/users/login', body);
  setToken(data.token);
  setTokenToStorage(data.token);
  return data;
};

export const logOut = async () => {
  const { data } = await instanceAuth.post('users/logout');
  deleteToken();
  return data;
};

export const refresh = async () => {
  const token = localStorage.getItem('token');
  token && setToken(JSON.parse(token));
  const { data } = await instanceAuth('/users/current');
  return data;
};
