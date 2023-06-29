import adminSlice from './slice/admin/adminSlice';
import formProductSlice from './slice/admin/formProductSlice';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {userSlice} from './slice/user'; // import the userReducer from your project

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userSlice);

const store = configureStore({
  reducer: {
    adminState: adminSlice, // use ".reducer" to access the reducer function
    formProductState: formProductSlice, // use ".reducer" to access the reducer function
    userState: persistedReducer, // add the persistedReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

export const persistor = persistStore(store);




