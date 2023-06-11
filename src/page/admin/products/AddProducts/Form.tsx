import TextEditor from './TextEditor';
import { Input } from '@/components';
import SelectBox from './SelectBox';
import UploadImages from './UploadImages';

const Form = () => {
  return (
    <div className="h-[35rem] overflow-hidden overflow-y-auto overflow-x-auto mt-12">
      <form className="px-2">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              اضافه کردن محصول
            </h2>
            <div className="mt-10 grid grid-cols- gap-x-6 gap-y-8  sm:grid-cols-6">
              <div className="sm:col-span-full">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  نام محصول
                </label>
                <div className="mt-2">
                  <Input
                    placeholder="مثال: آیفون 6"
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orangeAdmin sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <SelectBox />
            </div>
          </div>
          <UploadImages />
          <div className="w-full ">
            <TextEditor />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            کنسل
          </button>
          <button
            type="submit"
            className="rounded-md bg-orangeAdmin px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            ذخیره
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
