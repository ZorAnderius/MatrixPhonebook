import axios from 'axios';

axios.defaults.baseURL = 'https://64d692e92a017531bc12c341.mockapi.io/contacts';

export const fetchContacts = async () => {
  const { data } = await axios();
  return data;
};

export const addContact = async body => {
  const { data } = await axios.post('', body);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/${id}`);
  return data;
};
