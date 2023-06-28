import React, { useEffect, useState } from 'react';
import Form from './form';
import { userType } from '@/types/type';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import finalForm from '@/schemas/user/finalForm';
import { DevTool } from '@hookform/devtools';
import useRedux from '@/hooks/useRedux';
import { FINALORDER } from '@/redux/slice/user/userSlice';
import { setCookie, getCookie, removeCookies } from 'cookies-next';
import { useRouter } from 'next/router';
interface props {
  userData: userType;
}
interface IFormInput {
  firstName: String;
  lastName: String;
  email: String;
  date: string;
  address: string;
  city: string;
  region: string;
  postalCode: string;
  phoneNumber: string;
}
const Index = ({ userData }: props) => {
  const [datePicker, setDate] = useState('');
  const router = useRouter();
  const [value, dispatch] = useRedux((state) => state.userState);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(finalForm),
    mode: 'all',
  });
  const onSubmit = (data) => {
    const userId = getCookie('id');

    console.log(data);
    if (datePicker === '') {
      alert('لطفا تاریخ تحویل را مشخص کنید');
    } else {
      const productsHandle = value.cart.map((item) => {
        const obj = {
          product: item.data._id,
          count: item.quantity,
        };
        return obj;
      });

      const DATA = {
        user: userId,
        deliveryDate: datePicker,
        products: productsHandle,
        deliveryStatus: false,
      };
      console.log(DATA);

      dispatch(FINALORDER({type:"add" , data:DATA}))
      router.push('/cart/payment');

    }
    
  };
  useEffect(() => {
    setValue('city', '');
    setValue('address', userData.address);
    setValue('postalCode', '');
    setValue('firstName', userData.firstname);
    setValue('lastName', userData.lastname);
    setValue('phoneNumber', +userData.phoneNumber);
  }, []);
  return (
    <div className="py-10">
      <h2>نهایی کردن خرید</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form
            userData={userData}
            control={control}
            errors={errors}
            setDate={setDate}
          />
        </form>
      </div>
    </div>
  );
};

export default Index;
