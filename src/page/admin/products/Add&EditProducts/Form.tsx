import TextEditor from './TextEditor';
import { Button, Input } from '@/components';
import SelectBox from './SelectBox';
import UploadImages from './UploadImages';
import dynamic from 'next/dynamic';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import formProduct from '@/schemas/admin/formProduct';
import postData from '@/api/postData';
import { ProductModal } from '@/types/type';
import useRedux from '@/hooks/useRedux';
import useMutationCustom from '@/hooks/mutationQuery';
import { useMutation } from '@tanstack/react-query';
import patchData from '@/api/patchData';

interface props {
  setOpenModal:
    | Dispatch<SetStateAction<{ filter: boolean; buttonOrange: boolean }>>
    | Dispatch<SetStateAction<{ Edit: boolean; Delete: boolean }>>;
  refetch: () => void;
  editFlag?: boolean;
}

const Form = ({ setOpenModal, refetch, editFlag }: props) => {
  const ReactQuill = useMemo(
    () => dynamic(import('react-quill'), { ssr: false }),
    []
  );
  const refTextEditor = useRef(null);
  const [imgsSrc, setImgsSrc] = useState<unknown[] | never[]>([]);
  const [thumbnailSrc, setThumbnailSrc] = useState<unknown | string>('');
  const [description, setDescription] = useState();
  const [value, dispatch] = useRedux((state) => state.formProductState);
  const [defaultValue, setDefaultValue] = useState<ProductModal>();
  const [selectedCategory, SetSelecetesCategory] = useState();

  const createProduct = async (formData) => {
    return postData('/products', formData).then((res) => refetch());
  };
  const updateProduct = async (id, formData) => {
    patchData('http://localhost:8000/api/products/' + id, formData).then(
      (res) => refetch()
    );
  };
  const mutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      reset();
      return setOpenModal({ filter: false, buttonOrange: false });
    },
  });

  // const mutationEdit = useMutation({
  //   mutationFn: ({ id, formData }) => updateProduct(id, formData),
  //   onSuccess: () => {
  //     reset();
  //     return setOpenModal({ filter: false, buttonOrange: false });
  //   },
  // });
  const mutationEdit = useMutation({
    mutationFn: ({ id, formData }) => updateProduct(id, formData),
    onSuccess: () => {
      reset();
      return setOpenModal({ filter: false, buttonOrange: false });
    },
  });

  
  useEffect(() => {
    if (value.name !== '') {
      setValue('name', value.name);
      setValue('price', value.price);
      setValue('brand', value.brand);
      setValue('quantity', value.quantity);
      setValue('category', value.category._id);
      setValue('subcategory', value.subcategory._id);
      setValue('category', value.category._id);
      setDescription(value.description);
      SetSelecetesCategory(value.category._id)
    }
  }, [value]);

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formProduct),
    mode: 'all',
    defaultValues: {
      name: '',
      brand: '',
      quantity: '',
      price: '',
      category: '',
      subcategory: '',
      images: [],
      thumbnail: '',
    },
  });
  let formData = new FormData();
  const Editor = dynamic(() => import('./TextEditor'), { ssr: false });
  const onSubmit = (data: ProductModal) => {
    console.log(refTextEditor.currentValue);

    Object.keys(data).map((key: any) => {
      if (key !== 'images' && key !== 'thumbnail') {
        return formData.append(key, data[key]);
      }
    });
    formData.append('description', description);

    imgsSrc.map((item: any) => {
      formData.append('images', item);
    });
    formData.append('thumbnail', thumbnailSrc);
    // try {
    //   postData('/products', formData).then((res) => refetch());
    // } catch (error) {
    //   console.error(error);
    // }
    // return setOpenModal({ filter: false, buttonOrange: false });

    editFlag
      ? mutationEdit.mutate({
          id: value.id,
          formData: formData,
        })
      : mutation.mutate(formData);
  };

  return (
    <div className="h-[35rem] overflow-hidden overflow-y-auto overflow-x-auto mt-12">
      <form className="px-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              اضافه کردن محصول
            </h2>
            <div className="mt-10 grid grid-cols- gap-x-6 gap-y-8  sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  نام محصول
                </label>{' '}
                <div className="mt-2">
                  <Controller
                    control={control}
                    name="name"
                    // rules={{ required: true }}
                    render={({ field: { onChange, value, name } }) => {
                      return (
                        <input
                          // {...field}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeAdmin sm:text-sm sm:leading-6"
                          type="text"
                          name={name}
                          onChange={onChange}
                          value={value}
                        />
                      );
                    }}
                  />{' '}
                </div>
                {/* <Input
                    register={register}
                    placeholder="مثال: آیفون 6"
                    type="text"
                    name="name"
                    id="name"
                    value={editFlag && value.name}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeAdmin sm:text-sm sm:leading-6"
                  /> */}
                <div className="h-5 text-orangeAdmin pt-2">
                  {errors.name?.message}
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  برند
                </label>
                <div className="mt-2">
                  <Controller
                    control={control}
                    name="brand"
                    // rules={{ required: true }}
                    render={({ field: { onChange, value, name } }) => {
                      return (
                        <input
                          // {...field}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeAdmin sm:text-sm sm:leading-6"
                          type="text"
                          name={name}
                          onChange={onChange}
                          value={value}
                        />
                      );
                    }}
                  />
                </div>
                <div className="h-5 text-orangeAdmin pt-2">
                  {errors.brand?.message}
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  موجودی
                </label>
                <div className="mt-2">
                  <Controller
                    control={control}
                    name="quantity"
                    // rules={{ required: true }}
                    render={({ field: { onChange, value, name } }) => {
                      return (
                        <input
                          // {...field}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeAdmin sm:text-sm sm:leading-6"
                          type="number"
                          name={name}
                          onChange={onChange}
                          value={value}
                        />
                      );
                    }}
                  />
                  {/* <Input
                    register={register}
                    placeholder="مثال: آیفون 6"
                    type="number"
                    name="quantity"
                    value={editFlag && value.quantity}
                    id="quantity"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeAdmin sm:text-sm sm:leading-6"
                  /> */}
                </div>
                <div className="h-5 text-orangeAdmin pt-2">
                  {errors.quantity?.message}
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  قیمت
                </label>
                <div className="mt-2">
                  <Controller
                    control={control}
                    name="price"
                    rules={{ required: true }}
                    render={({ field: { onChange, value, name } }) => {
                      return (
                        <input
                          // {...field}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeAdmin sm:text-sm sm:leading-6"
                          type="number"
                          name={name}
                          onChange={onChange}
                          value={value}
                        />
                      );
                    }}
                  />
                  {/* <Input
                    register={register}
                    placeholder="به تومان قیمت را وارد کنید"
                    type="number"
                    value={editFlag && value.price}
                    name="price"
                    id="price"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeAdmin sm:text-sm sm:leading-6"
                  /> */}
                </div>
                <div className="h-5 text-orangeAdmin pt-2">
                  {errors.price?.message}
                </div>
              </div>

              <SelectBox
              selectedCategory={selectedCategory}
              SetSelecetesCategory={SetSelecetesCategory}
                control={control}
                register={register}
                errors={errors}
                editFlag={editFlag}
              />
            </div>
          </div>

          <UploadImages
            editFlag={editFlag}
            value={value}
            errors={errors}
            register={register}
            setImgsSrc={setImgsSrc}
            setThumbnailSrc={setThumbnailSrc}
          />
          <div className="w-full ">
            <ReactQuill
              theme="snow"
              value={description}
              onChange={(e) => {
                return setDescription(e)
              }}
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Button
            onClick={() => {}
              // editFlag
              //   ? setOpenModal({ filter: false, buttonOrange: false })
              //   : setOpenModal({ Edit: false, Delete: false })
            }
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            کنسل
          </Button>
          <Button
            type="submit"
            className="rounded-md bg-orangeAdmin px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            ذخیره
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
