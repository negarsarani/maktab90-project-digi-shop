import Input from '../../components/Input';
import React from 'react';
import imgLogo from '../../assets/logo-ligth.svg';
import arrow from '../../assets/Icons/arrowLogin.svg';
import Image from 'next/image';
import Button from '@/components/Button';
const LoginAdmin = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 border border-black border-">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image className="mx-auto h-10 w-auto" src={imgLogo} alt="دیجی شاپ" />
          <p>خوش آمدید</p>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            ورود
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                ایمیل
              </label>
              <div className="mt-2">
                <Input
                  type="email"
                  placeholder="ایمیل"
                  id={'email'}
                  name={'email'}
                  autoComplete="email"
                  className={
                    'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeAdmin sm:text-sm sm:leading-6'
                  }
                />
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
              <div className="mt-2">
                <Input
                  type="password"
                  placeholder="رمز عبور"
                  id={'password'}
                  name={'password'}
                  autoComplete="current-password"
                  className={
                    'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeAdmin sm:text-sm sm:leading-6'
                  }
                />
              </div>
            </div>

            <div className="flex items-center justify-center w-full">
              <Button
                className="flex items-center justify-center gap-5 w-1/2  rounded-md bg-orangeAdmin px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
              >
                <Image src={arrow} alt="ورود" />
                <span>Sign in</span>
              </Button>
            </div>
          </form>

          <div className="text-sm flex justify-center">
            <a
              href="#"
              className="font-semibold text-orangeAdmin hover:text-red-800"
            >
              رمز را فراموش کردید؟
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAdmin;
