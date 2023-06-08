import { Button } from '@/components';
import Modal from '../shared/Modal';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';

interface ModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<
    SetStateAction<{ filter: boolean; buttonOrange: boolean }>
  >;
}
const OrdersFilter = ({ openModal, setOpenModal }: ModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data: any) => {
    console.log('Aaa');

    console.log(data);
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
                      <option className="hover:bg-orange-200">همه</option>
                      <option>درحال ارسال</option>
                      <option>تحویل داده شده</option>
                    </select>
                    {/* <span> {errors}</span> */}
                  </div>
                  <div className='w-[11rem] h-5 pt-8 flex items-center justify-center text-center '>
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
                  <label htmlFor="">مجموع مبلغ</label>
                  <div className="mt-6 space-y-3 ">
                    <div className="flex items-center gap-x-3">
                      <input
                        {...register('sumPrice')}
                        id="lessthan1"
                        name="sumPrice"
                        value="lessthan1"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="push-everything"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        کمتر از یک میلیون تومان
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        {...register('sumPrice')}
                        id="lessthan2"
                        name="sumPrice"
                        type="radio"
                        value="lessthan2"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="push-email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        کمتر از دو میلیون تومان
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        {...register('sumPrice')}
                        id="morethan2"
                        name="sumPrice"
                        type="radio"
                        value="morethan2"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
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
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <Button
            className="bg-orange-300 px-2 py-1 rounded-md "
            type="submit"
            onClick={() => {
              // setOpenModal({ filter: false , buttonOrange: false })
              console.log('hulhg');
            }}
          >
            اعمال
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default OrdersFilter;
