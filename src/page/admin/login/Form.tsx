import { Button, Input } from '@/components';
import { DataLoginAdmin } from '@/types/type';
import Image from 'next/image';
import { FieldErrors, UseFormRegister } from 'react-hook-form/dist/types';
// @flow
interface Props {
  errors: FieldErrors<DataLoginAdmin>;
  register: UseFormRegister<DataLoginAdmin>;
}
const Form = ({ errors, register }: Props) => {
  return (
    <>
      {' '}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          نام کاربری
        </label>
        <div className="mt-2 h-14">
          <Input
            register={register}
            type="text"
            placeholder="نام کاربری"
            id={'username'}
            name={'username'}
            className={
              'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeAdmin sm:text-sm sm:leading-6 placeholder:py-2'
            }
          />
          <span className="text-orangeAdmin "> {errors.username?.message}</span>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            رمز عبور
          </label>
        </div>
        <div className="mt-2 h-14">
          <Input
            register={register}
            type="password"
            placeholder="رمز عبور"
            id={'password'}
            name={'password'}
            className={
              'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeAdmin sm:text-sm sm:leading-6 placeholder:py-2'
            }
          />
          <span className="text-orangeAdmin ">{errors.password?.message}</span>
        </div>
      </div>
      <div className="flex items-center justify-center w-full">
        <Button
          className="flex items-center justify-center gap-5 w-1/2  rounded-md bg-orangeAdmin px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="submit"
        >
          <Image
            width={30}
            height={30}
            src={'/Icons/arrowLogin.svg'}
            alt="ورود"
          />
          <span>ورود</span>
        </Button>
      </div>
    </>
  );
};
export default Form;
