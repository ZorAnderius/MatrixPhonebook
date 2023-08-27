import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'api/contactsAPI';

export const fetchContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  fetchContacts()
);

export const addContactThunk = createAsyncThunk('contacts/addContact', body =>
  addContact(body)
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => deleteContact(id)
);
