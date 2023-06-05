import { useRouter } from 'next/router';
import { setCookie } from 'cookies-next';
import { toast } from 'react-toastify';

interface arguments {
    data: any;
    isSuccess: boolean;
    isError: boolean;
  }
  export function LogicLogin({ data, isSuccess, isError }: arguments) {
    const router = useRouter();
    const handleSuccess = () => {
      console.log(data);
      localStorage.setItem('loginUser', JSON.stringify(data.token.accessToken));
      setCookie('accesstoken', data.token.accessToken);
      router.push('/admin');
    };
  
    if (isSuccess) {
      handleSuccess();
    }
    console.log(isSuccess, isError);
    if (isError) {
      toast.error('کاربر یافت نشد', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }