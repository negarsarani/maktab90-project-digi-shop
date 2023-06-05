import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import postData from '@/api/postData';
import { useForm } from 'react-hook-form';
import loginAdminSchema from '@/schemas/loginAdminSchema';
import { DataLoginAdmin } from '@/types/type';
import useMutationQuery from '@/hooks/mutationQuery';
import Form from './Form';
import { LogicLogin } from './logic';
const LoginAdmin = () => {
  const { mutate, isLoading, isError, isSuccess, data } = useMutationQuery(
    (userData: DataLoginAdmin) => postData(userData)
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DataLoginAdmin>({
    resolver: yupResolver(loginAdminSchema),
    mode: 'all',
  });
  const onSubmit = (data: DataLoginAdmin) => {
    console.log(data);
    mutate(data);
    reset();
  };
  LogicLogin({ data, isSuccess, isError });
  return (
    <div className="flex  min-h-full flex-1 flex-col  py-12 lg:px-8 justify-center items-center   ">
      <div className=" bg-white  w-full min-[320px]:w-10/12 2xl:w-5/12 xl:w-7/12 lg:w-10/12 md:w-6/12 sm:w-8/12   rounded-2xl shadow-xl sm:p-10 p-5 py-10 ">
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

        <div className="mt-10  w-full">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Form errors={errors} register={register}/>
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
