
import React from 'react';
interface Inputtype {
  register?: any
  className: string;
  name: string;
  id?: string;
  type: 'email' | 'text' | 'password' | 'number' | 'search'| "file"
  placeholder: string;
  autoComplete?: string;
  value?: string
}
const Input = ({
  className,
  name,
  id,
  value,
  type,
  placeholder,
  autoComplete,
  register,
}: Inputtype) => {
  return (
    <input
      {...register?.(name)}
      id={id}
      name={name}
      type={type}
      value={value}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;
