import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState = {
  id: '',
  name: '',
  brand: '',
  quantity: '',
  price: '',
  category: '',
  subcategory: '',
  images: [],
  thumbnail: '',
  description: '',
};
export const formProductSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    ACTIVE: (state, action) => {
      const {
        name,
        price,
        quantity,
        brand,
        description,
        category,
        subcategory,
        thumbnail,
        images,
        _id,
      } = action.payload;
      state.id = _id;
      state.price = price;
      state.brand = brand;
      state.description = description;
      state.quantity = quantity;
      state.category = category;
      state.subcategory = subcategory;
      state.thumbnail = thumbnail;
      state.images = images;
      state.name = name;
    },
  },
});
export const { ACTIVE } = formProductSlice.actions;
export default formProductSlice.reducer;
