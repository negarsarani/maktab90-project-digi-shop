import { Input } from '@/components';
import { finalFormType } from '@/types/type';
import { Controller } from 'react-hook-form';
interface props {
  placeholder: string;
  type: 'email' | 'text' | 'password' | 'number' | 'search' | 'file' | 'date';
  name: string;
  control: any;
  errors: string | undefined;
}
const InputFinal = ({ placeholder, type, name, control, errors }: props) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={{ required: true }}
        render={({ field: { onChange, value, name } }) => {
          return (
            <div className="sm:col-span-3">
              <label
                htmlFor={name}
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {placeholder}
              </label>
              <div className="mt-2">
                <Input
                  placeholder={placeholder}
                  type={type}
                  name={name}
                  onChange={onChange}
                  value={value}
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-btnCard sm:text-sm sm:leading-6"
                />
              </div>
              <div className='text-btnCard  h-2 pt-2 pb-2'>{errors}</div>
              
            </div>
          );
        }}
      />
    </>
  );
};

export default InputFinal;
