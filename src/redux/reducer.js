import { authReducer } from './auth/authSlice';
import { contactReducer } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';
import { rootReducer } from './errorLoader/helperSlice';

export const reducer = {
  contacts: contactReducer,
  filter: filterReducer,
  auth: authReducer,
  root: rootReducer,
};
