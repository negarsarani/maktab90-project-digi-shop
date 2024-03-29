import  { ReactNode } from 'react';
type Buttontype = {
  className: string;
  children: ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: ((e:any) => void )
};
const Button = ({ className, children, type, onClick }: Buttontype) => {
  return (
    <button onClick={onClick} type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
