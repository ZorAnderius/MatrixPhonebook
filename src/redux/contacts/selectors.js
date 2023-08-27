import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;

export const selectFilterQuery = state => state.filter;

// export const filterContacts = state => {
//   const normalaizedFilter = state.filter.toLowerCase();
//   return state.contacts.contacts?.filter(contact =>
//     contact.name.toLowerCase().includes(normalaizedFilter)
//   );
// };

export const filterContacts = createSelector(
  [selectContacts, selectFilterQuery],
  (contacts, filter) => {
    return contacts.contacts?.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
