import { toast } from 'react-toastify';
import { QueryClient } from '@tanstack/react-query';
export function queryErrorHandler(error: unknown) {
  const title =
    error instanceof Error
      ? error.toString().replace(/AxiosError:\s*/, '')
      : 'خطای اتصال به شبکه';
  toast(title, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      staleTime: 600000,
      cacheTime: 900000,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: queryErrorHandler,
    },
  },
});
