import { ChildAdminInit } from '@/types/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AdminStore {
  products: ChildAdminInit;
  inventory: ChildAdminInit;
  [key: string]: ChildAdminInit | any;
}

const initialState: AdminStore = {
  products: {
    page: 1,
    options: { limit: 4 },
    data: [],
  },
  inventory: {
    page: 1,
    options: { limit: 4 },
    data: [],
  },
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    DATA: (
      state,
      action: PayloadAction<{ name: keyof AdminStore; items: any }>
    ) => {
      const { name, items } = action.payload;

      state[name].data = items?.data.products;
      state[name].page = items?.page;
      state[name].options.limit = items?.per_page;
    },
  },
});

export const { DATA } = adminSlice.actions;

export default adminSlice.reducer;
