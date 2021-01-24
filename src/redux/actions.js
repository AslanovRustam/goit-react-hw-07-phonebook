import types from './types';
import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');
// export const addContactRequest = createAction('contact/addContactRequest');
// export const addContactSuccess = createAction('contact/addContactSuccess');
// export const addContactError = createAction('contact/addContactError');
export const deleteContactRequest = createAction('contacts/addContactRequest');
export const deleteContactSuccess = createAction('contacts/addContactSuccess');
export const deleteContactError = createAction('contacts/addContactError');

export const changeFilter = createAction(types.FILTER);
