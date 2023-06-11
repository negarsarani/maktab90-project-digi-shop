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
    filter: '',
    sort: '',
    options: { limit: 4, page: 1, totalPages: '' },
    url: { keyApi: 'products', path: 'products?page=1&limit=4' },
    data: [],
  },
  inventory: {
    filter: '',
    sort: '',
    options: { limit: 4, page: 1, totalPages: '' },
    url: { keyApi: 'products', path: 'products?page=1&limit=4' },
    data: [],
  },
  orders: {
    filter: '',
    sort: '',
    options: { limit: 4, page: 1, totalPages: '' },
    url: { keyApi: 'orders', path: 'orders?page=1&limit=4' },
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
      state[name].data = items?.data[key];
      console.log(items.total_pages);

      state[name].options.totalPages = items?.total_pages;
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
            ? (state[name].options.page = --state[name].options.page)
            : null;
        }
      }
      state[
        name
      ].url.path = `${state[name].url.keyApi}?page=${state[name].options.page}&limit=${state[name].options.limit}`;
    },
    SORTDATA: (state, action) => {
      const { name, sortItem } = action.payload;
      const Toggle = state[name].sort === sortItem ? true : false;
      let newSortUrl;

      if (Toggle) {
        state[name].sort = '';
        newSortUrl = state[name].url.path.split('&sort=')[0];
      } else {
        const url = state[name].url.path.split('&sort=')[0];
        state[name].sort = sortItem;
        newSortUrl = `${url}&sort=${state[name].sort}`;
      }

      state[name].url.path = newSortUrl;
    },
    FILTERDATA: (state, action) => {
      const { name, item } = action.payload;
      item !== state[name].filter && (state[name].filter = item);
      state[
        name
      ].url.path = `orders?page=${state[name].options.page}&limit=${state[name].options.limit}${state[name].filter}`;
    },
    FILTERREMOVE: (state, action) => {
      const {name} = action.payload;
      state[name].url.path = `${state[name].url.keyApi}?page=1&limit=4`
    },
  },
});

export const { DATA, PAGINATE, SORTDATA, FILTERDATA , FILTERREMOVE } = adminSlice.actions;

export default adminSlice.reducer;
