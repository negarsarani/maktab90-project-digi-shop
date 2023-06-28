import { createSlice } from '@reduxjs/toolkit';
type initialStateType = {
  cart: {
    quantity: string;
    data: {
      rating: [Object];
      _id: string;
      category: [Object];
      subcategory: [Object];
      name: string;
      price: 526777;
      quantity: 444;
      brand: string;
      description: string;
      thumbnail: string;
      images: [];
      createdAt: string;
      slugname: string;
    };
  }[];
  FinalOrders: {};
  Total: string | number;
};
const initialState: initialStateType = {
  cart: [],
  FinalOrders: {},
  Total: 0,
};
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    CART: (state, action) => {
      const { quantity, data } = action.payload;
      const FindId = state.cart.find((item) => item.data._id === data._id);
      if (FindId) {
        const changeData = state.cart.map((item) => {
          if (item.data._id === data._id) {
            item.quantity = quantity;
            return item;
          }
          return item;
        });
        state.cart = [...changeData];
      } else {
        state.cart = [{ quantity: quantity, data: data }, ...state.cart];
      }
    },
    DELETEITEM: (state, action) => {
      const { id } = action.payload;
      const filteredCart = state.cart.filter((item) => item.data._id !== id);
      state.cart = filteredCart;
    },
    FINALORDER: (state, action) => {
      const { type, data } = action.payload;
      if (type == 'clear') {
        state.FinalOrders = {};
      } else {
        state.FinalOrders = action.payload;
      }
    },
    TOTAL:(state , action)=>{
      state.Total = action.payload
    }
  },
});
export const { CART, DELETEITEM, FINALORDER , TOTAL} = userSlice.actions;
export default userSlice.reducer;
