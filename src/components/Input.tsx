import React from 'react';
type Inputtype = {
  className: string;
  name: string
  id: string 
  type: 'email' | 'text' | 'password' | 'number';
  placeholder: string;
  autoComplete?: string;
};
const Input = ({
  className,
  name,
  id,
  type,
  placeholder,
  autoComplete,
}: Inputtype) => {
  return (
    <input
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
