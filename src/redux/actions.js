import { createAction } from '@reduxjs/toolkit';
import { ADD_CONTACT, REMOVE_CONTACT, SET_FILTER } from './types';

export const addContact = createAction(ADD_CONTACT);
export const removeContact = createAction(REMOVE_CONTACT);
export const setFilter = createAction(SET_FILTER);

