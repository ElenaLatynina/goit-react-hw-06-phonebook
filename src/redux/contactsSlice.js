import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
    name: 'contactsList',
    initialState: {
        contacts: [
  { id: 'id-1', name: 'Kelly Rut', number: '459-12-56' },
  { id: 'id-2', name: 'Robby Cool', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Monro', number: '645-17-79' },
  { id: 'id-4', name: 'Ann Coper', number: '227-91-26' },
],
        
    },

    reducers: {
        addContact(state, { payload }) {
            state.contacts = [payload, ...state.contacts]
        },
    
        deleteContact(state, { payload }) {
            state.contacts = state.contacts.filter(contact => contact.id !== payload);
        },
    },
    
});

const persistConfig = {
    key: 'contacts-list',
    storage,
    
};

export const persistContactReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
);

export const { addContact, deleteContact,  } = contactsSlice.actions;

export const getContacts = state => state.contactsList;