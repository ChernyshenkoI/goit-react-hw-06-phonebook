import { configureStore, createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact, setFilter } from './actions';

const items = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],

  [removeContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [setFilter]: (state, action) => action.payload,
});

const store = configureStore({
  reducer: {
    items,
    filter,
  },
});

export default store;
