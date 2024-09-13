// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import adminReducer from './slices/authSlice'; // Adjust the path as necessary

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, adminReducer);

// Configure store
const store = configureStore({
  reducer: {
    admin: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Create persistor
const persistor = persistStore(store);

// Export the store and persistor
export { persistor };
export default store;