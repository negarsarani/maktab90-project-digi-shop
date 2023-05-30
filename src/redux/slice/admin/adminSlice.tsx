import { ChildAdminInit } from '@/types/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AdminStore {
  products: ChildAdminInit;
  [key: string]: ChildAdminInit | any;
}

const initialState: AdminStore = {
  products: {
    page: 1,
    options: { limit: 4 },
    data: [],
  }
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


// {
//   "status": "success",
//   "page": 1,
//   "per_page": 10,
//   "total": 4,
//   "total_pages": 1,
//   "data": {
//       "products": [
//           {
//               "rating": {
//                   "rate": 0,
//                   "count": 0
//               },
//               "_id": "646d282ab3c6269853a2cd27",
//               "category": "646d272cb3c6269853a2cd12",
//               "subcategory": "646d2813b3c6269853a2cd20",
//               "name": "iPhone 14 pro Max",
//               "price": 1000,
//               "quantity": 23,
//               "brand": "apple",
//               "description": "iphone love it",
//               "thumbnail": "products-thumbnails-default.jpeg",
//               "images": [
//                   "products-images-default.jpeg"
//               ],
//               "createdAt": "2023-05-23T20:55:06.977Z",
//               "updatedAt": "2023-05-23T20:55:06.977Z",
//               "slugname": "iphone-14-pro-max"
//           },
//           {
//               "rating": {
//                   "rate": 0,
//                   "count": 0
//               },
//               "_id": "64725bdf05281a5df82f0ab1",
//               "category": "646d271ab3c6269853a2cd0e",
//               "subcategory": "64725bd305281a5df82f0aac",
//               "name": "iPhone",
//               "price": 1000,
//               "quantity": 23,
//               "brand": "apple",
//               "description": "iphone love it",
//               "thumbnail": "products-64725bdf05281a5df82f0ab1-1685216223796.jpeg",
//               "images": [
//                   "products-64725bdf05281a5df82f0ab1-1685216223833-1.jpeg"
//               ],
//               "createdAt": "2023-05-27T19:37:03.793Z",
//               "updatedAt": "2023-05-27T19:37:03.871Z",
//               "slugname": "iphone"
//           },
//           {
//               "rating": {
//                   "rate": 0,
//                   "count": 0
//               },
//               "_id": "64725c2b05281a5df82f0ab9",
//               "category": "646d271ab3c6269853a2cd0e",
//               "subcategory": "64725bd305281a5df82f0aac",
//               "name": "iPhone fdvgds",
//               "price": 1000,
//               "quantity": 23,
//               "brand": "apple",
//               "description": "iphone love it",
//               "thumbnail": "products-64725c2b05281a5df82f0ab9-1685216299254.jpeg",
//               "images": [
//                   "products-64725c2b05281a5df82f0ab9-1685216299293-1.jpeg"
//               ],
//               "createdAt": "2023-05-27T19:38:19.252Z",
//               "updatedAt": "2023-05-27T19:38:19.343Z",
//               "slugname": "iphone-fdvgds"
//           },
//           {
//               "rating": {
//                   "rate": 0,
//                   "count": 0
//               },
//               "_id": "64725c3a05281a5df82f0abf",
//               "category": "646d271ab3c6269853a2cd0e",
//               "subcategory": "64725bd305281a5df82f0aac",
//               "name": "ewgrbhbgt",
//               "price": 1000,
//               "quantity": 23,
//               "brand": "apple",
//               "description": "iphone love it",
//               "thumbnail": "products-64725c3a05281a5df82f0abf-1685216314271.jpeg",
//               "images": [
//                   "products-64725c3a05281a5df82f0abf-1685216314309-1.jpeg"
//               ],
//               "createdAt": "2023-05-27T19:38:34.269Z",
//               "updatedAt": "2023-05-27T19:38:34.369Z",
//               "slugname": "ewgrbhbgt"
//           }
//       ]
//   }
// }