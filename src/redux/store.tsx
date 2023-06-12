import adminSlice from './slice/admin/adminSlice';
import formProductSlice from './slice/admin/formProductSlice';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
  reducer: {
    adminState: adminSlice,
    formProductState: formProductSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
