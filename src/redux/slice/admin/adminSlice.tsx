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

      state[name].options.totalPages = items?.total_pages;

      console.log(items.total_pages);
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
      console.log(state[name].data.length);
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
      if (state[name].data.length === 0) {
        state[name].options.page > state[name].options.totalPages &&
          (state[name].options.page = --state[name].options.page);
        // state[name].data = items?.data[key];
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
} = adminSlice.actions;

export default adminSlice.reducer;
// const [valueAdmin, dispatch] = useRedux((state) => state.adminState);
// const [active, setActive] = useState(false);
// const [loading, data] = useQueries(() => deleteData(`products/${id}`), ['Delete']);
// const HandleDelete = () => {
//   setActive(true);
//   console.log(data);

//   dispatch(DELETEITEM({ name: 'products' , item:data}));
//   return setTimeout(() => {
//     return refetch();
//   }, 300);
//   // if (isError) {
//   //   toast.error('خطای شبکه  لطفا دوباره امتحان کنید', {
//   //     position: 'top-right',
//   //     autoClose: 5000,
//   //     hideProgressBar: false,
//   //     closeOnClick: true,
//   //     pauseOnHover: true,
//   //     draggable: true,
//   //     progress: undefined,
//   //     theme: 'light',
//   //   });
//   // }
// };
