import { Button } from '@/components';
import Modal from '../shared/Modal';
import { Dispatch, SetStateAction, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import getData from '@/api/getData';
import useQueries from '@/hooks/useQueries';
import useRedux from '@/hooks/useRedux';
import { FILTERDATA } from '@/redux/slice';

interface ModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<
    SetStateAction<{ filter: boolean; buttonOrange: boolean }>
  >;
  refetch: () => void;
}
const OrdersFilter = ({ openModal, setOpenModal, refetch }: ModalProps) => {
  const [filterObj, setFilterObj] = useState({ status: '', sumPrice: '' });
  const [valueAdmin, dispatch] = useRedux((state) => state.adminState);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      status: 'all',
      sumPrice: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (formData: any) => {

  let StatusData: string;
  let TotalPriceData: string;
  formData.status !== 'deliveryStatus'
  ? (StatusData = `&deliveryStatus=${formData.status}`)
  : (StatusData = `/deliveryStatus`);
  formData.sumPrice !== "all" ? (TotalPriceData = `&${formData.sumPrice}`) : TotalPriceData ='';
  dispatch(FILTERDATA({ name: 'orders', item: `${StatusData}${TotalPriceData}`}));
  setTimeout(() => {
      refetch();
    }, 200);
      //   setFilterObj(data)
      setTimeout(() => {
        console.log(formData);

      }, 100);
      setOpenModal({ filter: false, buttonOrange: false });
      reset()
  };

  return (
    <Modal name={'filter'} openModal={openModal} setOpenModal={setOpenModal}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className=" sm:px-10 px-2  py-4 flex flex-col items-center justify-center ">
          <h2 className=" font-semibold text-oran text-lg  text-gray-900">
            فیلتر سفارش ها
          </h2>
          <div className="sm:flex sm:gap-10 ">
            <div className=" border-gray-900/10 ">
              <div className="mt-10  ">
                <div className="flex flex-col items-center  justify-center">
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium mb-2  text-gray-900"
                  >
                    * وضعیت سفارش
                  </label>
                  <div className=" mt-2">
                    <select
                      {...register('status', { required: true })}
                      id="status"
                      name="status"
                      autoComplete="country-name"
                      className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orangeAdmin focus:ring-opacity-60 sm:max-w-xs sm:text-sm sm:leading-6 w-full"
                    >
                      <option disabled selected></option>
                      <option className="" value={'deliveryStatus'}>
                        همه
                      </option>
                      <option value={'false'}>درحال ارسال</option>
                      <option value={'true'}>تحویل داده شده</option>
                    </select>
                    {/* <span> {errors}</span> */}
                  </div>
                  <div className="w-[11rem] h-5 pt-8 flex items-center justify-center text-center ">
                    {errors.status ? (
                      <span className="text-sm text-orangeAdmin ">
                        لطفا یکی از گزینه ها را انتخاب کنید
                      </span>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className=" border-gray-900/10 pb-12">
              <div className="mt-10 space-y-10">
                <div className="flex flex-col items-center justify-center">
                  <label htmlFor="">*مجموع مبلغ</label>
                  <div className="mt-6 space-y-3 ">
                    <div className="flex items-center gap-x-3">
                      <Controller
                        control={control}
                        name="sumPrice"
                        render={({ field }) => {
                          return (
                            <input
                              {...field}
                              // {...register('sumPrice')}
                              id="all"
                              value="all"
                              type="radio"
                              name="sumPrice"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                          );
                        }}
                      />

                      <label
                        htmlFor="push-everything"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        همه مبالغ
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <Controller
                        control={control}
                        name="sumPrice"
                        render={({ field }) => {
                          return (
                            <input
                              // {...register('sumPrice')}
                              {...field}
                              id="totalPrice[lt]=1000000"
                              name="sumPrice"
                              value="totalPrice[lt]=1000000"
                              type="radio"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                          );
                        }}
                      />

                      <label
                        htmlFor="push-everything"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        کمتر از یک میلیون تومان
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <Controller
                        control={control}
                        name="sumPrice"
                        render={({ field }) => {
                          return (
                            <input
                              {...field}
                              // {...register('sumPrice')}
                              id="totalPrice[lt]=2000000"
                              name="sumPrice"
                              type="radio"
                              value="totalPrice[lt]=2000000"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                          );
                        }}
                      />

                      <label
                        htmlFor="push-email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        کمتر از دو میلیون تومان
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <Controller
                        control={control}
                        name="sumPrice"
                        render={({ field }) => {
                          return (
                            <input
                              {...field}
                              // {...register('sumPrice')}
                              id="totalPrice[gt]=2000000"
                              name="sumPrice"
                              type="radio"
                              value="totalPrice[gt]=2000000"
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                          );
                        }}
                      />

                      <label
                        htmlFor="push-nothing"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        بیشتر از دو میلیون تومان
                      </label>
                    </div>
                  </div>
                </div>
                <div className="w-[11rem] h-5 pt-8 flex items-center justify-center text-center ">
                  {errors.sumPrice ? (
                    <span className="text-sm text-orangeAdmin ">
                      لطفا یکی از گزینه ها را انتخاب کنید
                    </span>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <Button
            className="bg-orange-300 px-2 py-1 rounded-md "
            type="submit"
            onClick={() => {
              console.log('hulhg');
            }}
          >
            اعمال
          </Button>
        </div>
      </form>
      {/* <pre>{JSON.stringify(form.watch(), null, 2)}</pre> */}
    </Modal>
  );
};

export default OrdersFilter;
