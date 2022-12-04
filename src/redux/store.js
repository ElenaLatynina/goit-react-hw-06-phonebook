import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./flterSlice";
import { persistContactReducer } from "../redux/contactsSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistContactReducer } from '../redux/contactsSlice';

export const store = configureStore({
    reducer: {
        contacts: persistContactReducer,
        filter: filterSlice.reducer,
        
    },
    middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);