import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = [
  { id: 'id-1', name: 'Kelly Rut', number: '459-12-56' },
  { id: 'id-2', name: 'Robby Cool', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Monro', number: '645-17-79' },
  { id: 'id-4', name: 'Ann Coper', number: '227-91-26' },
];

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: contactsInitialState,
        filter: '',
    },

    reducers: {
    addContact(state, { payload }) {
        state.items.push(payload);
    },
    
    deleteContact(stata, { payload }) {
            state.items = state.items.filter(item => item.id !== payload)
        },
        changeFilter(state, { payload }) {
            state.filter = payload;
        },
    },
});

export const { addContact, deleteContact, changeFilter } = contactsSlice.actions;

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;