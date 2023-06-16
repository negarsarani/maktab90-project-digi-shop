import useCategory from '@/data/shared';
import { ProductModal } from '@/types/type';
import React, { useEffect, useState } from 'react';
import {
  Controller,
  FieldErrors,
  UseFormRegister,
  useForm,
} from 'react-hook-form';
interface props {
  register: UseFormRegister<ProductModal>;
  errors: FieldErrors<{ category: string; subcategory: string }>;
  value: { category: string; subcategory: { _id: string } };
  editFlag: boolean;
}
const SelectBox = ({ register, errors, value, editFlag }: props) => {
  const [categories, subCategories] = useCategory();
  const [selectedCategory, SetSelecetesCategory] = useState();

  
  useEffect(() => {
    if (editFlag) {
      const category: string = value.category._id;
      SetSelecetesCategory(category._id);
      return HandleSubCategory(category._id);
    }
  }, []);
  const HandleSubCategory = (itemDefualt?:string) => {
    console.log(itemDefualt);
    
    const filterData = subCategories?.filter(
      (item: { category: string }) =>{return itemDefualt ? item.category === itemDefualt :  item.category === selectedCategory }
    );
    return  filterData;
  };
  return (
    <>
      <div className="sm:col-span-3">
        <label
          htmlFor="country"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          دسته بندی
        </label>
        <div className="mt-2">
          <select
            {...register('category')}
            name="category"
            id="category"
            autoComplete="country-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orangeAdmin sm:max-w-xs sm:text-sm sm:leading-6"
            onChange={(e: any) => {
              SetSelecetesCategory(e.target.value);
              console.log(selectedCategory);
            }}
          >
            <option disabled selected></option>
            {editFlag
              ? categories?.map((item: { _id: string; name: string }) => {
                  return value.category._id === item._id ? (
                    <option
                      key={item._id}
                      id={item._id}
                      value={item._id}
                      selected
                    >
                      {item.name}
                    </option>
                  ) : (
                    <option key={item._id} id={item._id} value={item._id}>
                      {item.name}
                    </option>
                  );
                })
              : categories?.map((item: { _id: string; name: string }) => {
                  return (
                    <option key={item._id} id={item._id} value={item._id}>
                      {item.name}
                    </option>
                  );
                })}
            {/* {categories?.map((item: { _id: string; name: string }) => {
              return (
                <option key={item._id} id={item._id} value={item._id}>
                  {item.name}
                </option>
              );
            })} */}
          </select>
          <div className="h-5 text-orangeAdmin pt-2">
            {errors.category?.message}
          </div>
        </div>
      </div>
      <div className="sm:col-span-3">
        <label
          htmlFor="country"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          زیر دسته بندی
        </label>
        <div className="mt-2">
          <select
            {...register('subcategory')}
            id="subcategory"
            name="subcategory"
            autoComplete="country-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orangeAdmin sm:max-w-xs sm:text-sm sm:leading-6"
          >
            {editFlag
              ? HandleSubCategory()?.map(
                  (item: { _id: string; name: string }) => {
                    
                    return value.subcategory._id === item._id ?
                     (
                      <option
                        key={item._id}
                        id={item._id}
                        value={item._id}
                        selected
                      >
                        {item.name}
                      </option>
                    ) : (
                      <option key={item._id} id={item._id} value={item._id}>
                        {item.name}
                      </option>
                    );
                  }
                )
              : HandleSubCategory()?.map(
                  (item: { _id: string; name: string }) => {
                    return (
                      <option key={item._id} id={item._id} value={item._id}>
                        {item.name}
                      </option>
                    );
                  }
                )}
            {/* {HandleSubCategory()?.map((item: { _id: string; name: string }) => {
              return (
                <option key={item._id} id={item._id} value={item._id}>
                  {item.name}
                </option>
              );
            })} */}
          </select>
          <div className="h-5 text-orangeAdmin pt-2">
            {errors.subcategory?.message}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectBox;
