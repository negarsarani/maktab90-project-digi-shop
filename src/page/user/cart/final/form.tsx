import { Input } from '@/components';
import { finalFormType, userType } from '@/types/type';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import InputFinal from './InputFinal';
// import Datepickers from './DataPicker';
import { Controller, FieldErrors } from 'react-hook-form';
import DatePicker from 'react-multi-date-picker';
import { Calendar } from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { useState } from 'react';
import weekends from 'react-multi-date-picker/plugins/highlight_weekends';
interface props {
  userData: userType;
  control: any;
  errors: FieldErrors<finalFormType>;
}
const Form = ({ userData, control, errors , setValue }: props) => {
  return (
    <>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <InputFinal
              errors={errors.firstName?.message}
              control={control}
              name="firstName"
              placeholder="نام"
              type="text"
            />
            <InputFinal
              errors={errors.lastName?.message}
              control={control}
              name="lastName"
              placeholder="نام خانوادگی"
              type="text"
            />

            {/* <InputFinal
              control={control}
              name="date"
              placeholder="تاریخ تحویل"
              type="date"
            /> */}

            <InputFinal
              errors={errors.address?.message}
              control={control}
              name="address"
              placeholder="آدرس"
              type="text"
            />
            <InputFinal
              errors={errors.city?.message}
              control={control}
              name="city"
              placeholder="شهر"
              type="text"
            />
            <InputFinal
              errors={errors.postalCode?.message}
              control={control}
              name="postalCode"
              placeholder="کدپستی"
              type="text"
            />
            <InputFinal
              errors={errors.phoneNumber?.message}
              control={control}
              name="phoneNumber"
              placeholder="شماره تلفن"
              type="number"
            />
            <InputFinal
              errors={errors.email?.message}
              control={control}
              name="email"
              placeholder="ایمیل"
              type="email"
            />

            <div className="sm:col-span-3">
              <label
                htmlFor="date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                تاریخ تحویل
              </label>
              <div className="mt-2">
                <Controller
                  control={control}
                  name="date"
                  rules={{ required: true }} //optional
                  render={({ field: { onChange, name, value } }) => (
                    <div className="w-full">
                      <DatePicker
                        name={name}
                        className="w-full "
                        calendar={persian}
                        locale={persian_fa}
                        // value={value || ''}
                        minDate={new Date().setDate(32)}
                        plugins={[weekends()]}
                        // weekDays={weekDays}

                        // maxDate={new Date().setDate(0)}
                        onChange={(date)=> setValue("date" , date.unix.toString())}
                        // format={language === 'en' ? 'MM/DD/YYYY' : 'YYYY/MM/DD'}
                      />
                      <div className="text-btnCard  h-2 pt-2 pb-2">
                        {errors.date?.message}
                      </div>
                    </div>
                  )}
                />

                {/* <Datepickers setDate={setDate}/> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 px-3 py-2 hover:bg-zinc-200 text-gray-900 rounded-md text-sm"
        >
          انصراف
        </button>
        <button
          type="submit"
          className="rounded-md bg-btnCard px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          ذخیره
        </button>
      </div>
    </>
  );
};

export default Form;
