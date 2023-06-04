import { ChildAdminInit } from '@/types/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AdminStore {
  products: ChildAdminInit;
  inventory: ChildAdminInit;
  orders: ChildAdminInit;
  [key: string]: ChildAdminInit | any;
}

const initialState: AdminStore = {
  products: {
    options: { limit: 4, page: 1 },
    url: { keyApi: 'products', path: 'products?page=1&limit=5' },
    data: [],
  },
  inventory: {
    options: { limit: 4, page: 1 },
    url: { keyApi: 'products', path: 'products?page=1&limit=5' },
    data: [],
  },
  orders: {
    options: { limit: 4, page: 1 },
    url: { keyApi: 'orders', path: 'orders?page=1&limit=5' },
    data: [],
  },
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    DATA: (
      state,
      action: PayloadAction<{ name: keyof AdminStore; items: any; key: string }>
    ) => {
      const { name, items, key } = action.payload;
      state[name].url.path = `/${state[name].url.keyApi}`;
      state[name].data = items?.data[key];
      state[name].options.page = items?.page;
      state[name].options.limit = items?.limit;
    },
    PAGINATE: (
      state,
      action: PayloadAction<{ name: keyof AdminStore; item: string }>
    ) => {
      const { name, item } = action.payload;
      if (item === 'Next') {
        state[name].options.page = ++state[name].options.page;
      } else {
        if (item === 'Prev') {
          state[name].options.page > 1
            ? (state[name].options.page = state[name].options.page)
            : null;
        }
      }

      state[
        name
      ].url.path = `${state[name].url.keyApi}?page=${state[name].options.page}&limit=${state[name].options.limit}`;
    },
    CHANGEURL: (state, action) => {},
  },
});

export const { DATA, PAGINATE } = adminSlice.actions;

export default adminSlice.reducer;
