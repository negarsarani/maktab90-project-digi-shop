import React, { useEffect } from 'react';
import Form from './form';
import { userType } from '@/types/type';
import { useForm, SubmitHandler } from 'react-hook-form';

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
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  useEffect(() => {
    setValue('city', '');
    setValue('postalCode', '');
    setValue('email', '');
    setValue('date', '');
    setValue('firstName', userData.firstname);
    setValue('lastName', userData.lastname);
    setValue('address', userData.address);
    setValue('phoneNumber', userData.phoneNumber);
  }, []);
  return (
    <div className="py-10">
      <h2>نهایی کردن خرید</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form userData={userData} control={control} />
        </form>
      </div>
    </div>
  );
};

export default Index;
