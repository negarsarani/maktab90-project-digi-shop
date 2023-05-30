import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AdminStore {
 
  products: {
    page: number;
    options: { limit: number };
    data: any[];
  };
  [key: string]:
    | {
        page: number;
        options: { limit: number };
        data: any[];
      }
    | any;
}

const initialState: AdminStore = {
  products: {
    page: 1,
    options: { limit: 4 },
    data: [],
  },
  data: {
    jsc: '',
  },
};

export const adminSlice = createSlice({
  name: 'counter',
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
