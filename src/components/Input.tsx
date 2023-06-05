
import React from 'react';
interface Inputtype {
  register?: any
  className: string;
  name: string;
  id?: string;
  type: 'email' | 'text' | 'password' | 'number' | 'search';
  placeholder: string;
  autoComplete?: string;
}
const Input = ({
  className,
  name,
  id,
  type,
  placeholder,
  autoComplete,
  register,
}: Inputtype) => {
  return (
    <input
      {...register(name)}
      id={id}
      name={name}
      type={type}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;
