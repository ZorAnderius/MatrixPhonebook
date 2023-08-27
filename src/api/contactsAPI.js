import { instanceAuth } from './api';

export const fetchContacts = async () => {
  const { data } = await instanceAuth('/contacts');
  return data;
};

export const addContact = async body => {
  const { data } = await instanceAuth.post('/contactss', body);
  return data;
};

export const deleteContact = async id => {
  const { data } = await instanceAuth.delete(`/contacts/${id}`);
  return data;
};
