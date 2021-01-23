import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.contacts.filter;
const getAllContacts = state => state.contacts.contacts;

//=======без мемоизации
// const getFilteredContacts = state => {
//   const filter = getFilter(state);
//   const contacts = getAllContacts(state);
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

////======мемоизация
const getFilteredContacts = createSelector(
  [getFilter, getAllContacts],
  (filter, contacts) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

const getContactsAfterFilter = state => {
  const { filter, contacts } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = getFilteredContacts(state);
  return {
    contacts: filteredContacts,
  };
};

export default {
  getFilter,
  getFilteredContacts,
  getContactsAfterFilter,
};
