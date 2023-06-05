import { Input, Button } from '@/components';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import postData from '@/api/postData';
import { useRouter } from 'next/router';
import { setCookie } from 'cookies-next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Password } from '@mui/icons-material';
import { toast } from 'react-toastify';
import loginAdminSchema from '@/schemas/loginAdminSchema';

interface dataType {
  username: string;
  Password: string;
}

const LoginAdmin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginAdminSchema),
    mode: 'all',
  });

  const router = useRouter();
  const { mutate, isLoading, isError, isSuccess, data } = useMutation(
    (userData) => postData(userData)
  );

  const handleSuccess = () => {
    console.log(data);
    localStorage.setItem('loginUser', JSON.stringify(data.token.accessToken));
    setCookie('accesstoken', data.token.accessToken);
    // router.push('/admin/products');
  };

  if (isSuccess) {
    handleSuccess();
  }
  console.log(isSuccess, isError);

  const onSubmit = (data: dataType) => {
    console.log(data);

    mutate(data);
    reset();
  };

  if (isError) {
    toast('کاربر یافت نشد', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  }
  return (
    <div className="flex  min-h-full flex-1 flex-col px-6 py-12 lg:px-8 justify-center items-center   ">
      <div className=" bg-white  w-full min-[320px]:w-10/12 xl:w-6/12 lg:w-9/12 md:w-6/12 sm:w-8/12   rounded-2xl shadow-xl p-10 ">
        <div className="sm:mx-auto sm:w-full flex flex-col items-center justify-center sm:max-w-sm gap-10">
          <Image
            width={100}
            height={100}
            className="mx-auto h-10 w-auto"
            src={'/logo light.svg'}
            alt="دیجی شاپ"
          />
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-gray-500">خوش آمدید</p>
            <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              ورود
            </h2>
          </div>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                نام کاربری
              </label>
              <div className="mt-2">
                <input
                  {...register('username')}
                  type="text"
                  placeholder="ایمیل"
                  id={'username'}
                  name={'username'}
                  autoComplete="email"
                  className={
                    'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeAdmin sm:text-sm sm:leading-6'
                  }
                />
                <span>{errors.username?.message}</span>
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
              <div className="mt-2 w-full">
                <input
                  {...register('password')}
                  type="password"
                  placeholder="رمز عبور"
                  id={'password'}
                  name={'password'}
                  autoComplete="current-password"
                  className={
                    'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeAdmin sm:text-sm sm:leading-6'
                  }
                />
                <span>{errors.password?.message}</span>
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
          </form>

          <div className="text-sm flex justify-center mt-5">
            <a
              href="#"
              className="font-semibold text-orangeAdmin hover:text-red-800"
            >
              رمز را فراموش کردید؟
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
