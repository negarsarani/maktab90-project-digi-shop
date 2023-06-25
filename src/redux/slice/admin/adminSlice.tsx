import { ChildAdminInit } from '@/types/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface inventory extends ChildAdminInit {
  updateItems: {
    id: string;
    price?: undefined | number | string;
    quantity?: number | string | undefined;
    [key: string]: string | number | undefined;
  }[];
}
export interface AdminStore {
  products: ChildAdminInit;
  inventory: inventory;
  orders: ChildAdminInit;
  [key: string]: ChildAdminInit | any;
}

const initialState: AdminStore = {
  products: {
    filter: '',
    sort: '',
    options: { limit: 4, page: 1, totalPages: '' },
    url: {
      keyApi: 'products',
      path: 'products?page=1&limit=4&sort=-createdAt',
    },
    data: [],
  },
  inventory: {
    filter: '',
    sort: '',
    options: { limit: 4, page: 1, totalPages: '' },
    url: { keyApi: 'products', path: 'products?page=1&limit=4' },
    data: [],
    updateItems: [],
  },
  orders: {
    filter: '',
    sort: '',
    options: { limit: 4, page: 1, totalPages: '' },
    url: { keyApi: 'orders', path: `orders?page=1&limit=4` },
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
      state[name].options.totalPages = items?.total_pages;

      state[name].data = items?.data[key];
    },
    PAGINATE: (
      state,
      action: PayloadAction<{ name: keyof AdminStore; item: string }>
    ) => {
      // state.inventory.updateItems = [];
      const { name, item } = action.payload;
      if (name === 'inventory' && state.inventory.updateItems.length > 0) {
        alert(` لطفا تغییرات ایجاد شده را ذخیره کنید ، در غیر این صورت صفحه را ریفرش کنید`)
        
      } else {
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
        ].url.path = `${state[name].url.keyApi}?page=${state[name].options.page}&limit=${state[name].options.limit}&sort=-createdAt`;
      }
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
      const { name } = action.payload;
      state[name].url.path = `${state[name].url.keyApi}?page=1&limit=4`;
    },
    ACTIVEITEM: () => {},
    // DELETEITEM: (state) => {
    //   const {name} = action.payload

    // },
    DELETEITEM: (state, action) => {
      const { name } = action.payload;
      if ((state[name].data.length = 1)) {
        state[name].options.page > 1 &&
          (state[name].options.page = --state[name].options.page);
        let newUrl = state[name].url.path?.replace(
          /page=\d+/,
          `page=${state[name].options.page}`
        );

        state[name].url.path = newUrl;
      }
    },
    UPDATAINVENTORY: (state, action) => {
      const { item, type } = action?.payload;
      const newItem: any = { id: item?.id };
      newItem[item?.name] = item?.value;

      if (type === 'newAdd') {
        state.inventory.updateItems = [...state.inventory.updateItems, newItem];
      } else if (type === 'valueAdd') {
        const arrayProduct = state.inventory.updateItems.map((product) => {
          if (product.id === item.id) {
            product[item.name] = item.value;
            return product;
          }
          return product;
        });
        state.inventory.updateItems = [...arrayProduct];
      } else {
        state.inventory.updateItems = [];
      }
    },
  },
});

export const {
  DATA,
  PAGINATE,
  SORTDATA,
  FILTERDATA,
  FILTERREMOVE,
  DELETEITEM,
  UPDATAINVENTORY,
} = adminSlice.actions;

export default adminSlice.reducer;
