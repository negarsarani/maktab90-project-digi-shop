import React from 'react';
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
  
}
const Index = ({ userData }: props) => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="py-10">
      <h2>نهایی کردن خرید</h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form userData={userData} />
        </form>
      </div>
    </div>
  );
};

export default Index;
