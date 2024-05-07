import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
