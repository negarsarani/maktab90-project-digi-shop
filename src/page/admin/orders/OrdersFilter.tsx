import Modal from '../shared/Modal';
import { Dispatch, SetStateAction } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

interface ModalProps {
  openModal: boolean;
  setOpenModal: Dispatch<
    SetStateAction<{ filter: boolean; buttonOrange: boolean }>
  >;
}
const OrdersFilter = ({ openModal, setOpenModal }: ModalProps) => {
  return (
    <Modal name={'filter'} openModal={openModal} setOpenModal={setOpenModal}>
      <form action="">
        <div className=" px-10 py-4 flex flex-col items-center justify-center ">
          <h2 className=" font-semibold text-oran text-lg  text-gray-900">
            فیلتر سفارش ها
          </h2>
          <div className='sm:flex sm:gap-10 '>
             <div className=" border-gray-900/10 ">
            <div className="mt-10  ">
              <div className="flex flex-col items-center justify-center">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium mb-2 text-gray-900"
                >
                  وضعیت سفارش
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orangeAdmin focus:ring-opacity-60 sm:max-w-xs sm:text-sm sm:leading-6 w-full"
                  >
                    <option className='hover:bg-orange-200' selected>همه</option>
                    <option>درحال ارسال</option>
                    <option>تحویل داده شده</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className=" border-gray-900/10 pb-12">
            <div className="mt-10 space-y-10">
              <div className='flex flex-col items-center justify-center'>
                <label htmlFor="">قیمت</label>
                <div className="mt-6 space-y-3 ">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-everything"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      کمتر از یک  میلیون تومان
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      کمتر از دو  میلیون تومان
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-nothing"
                      name="push-notifications"
                      type="radio"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="push-nothing"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      بیشتر از دو  میلیون تومان
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
         
        </div>
      </form>
    </Modal>
  );
};

export default OrdersFilter;
