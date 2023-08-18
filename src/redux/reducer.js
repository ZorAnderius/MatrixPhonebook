import { contactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const reducer = {
  contacts: contactReducer,
  filter: filterReducer,
};
