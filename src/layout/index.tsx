import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { QueryClientProvider } from '@tanstack/react-query';
import { Mainlayout, Adminlayout } from './featured';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../redux/store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools';

import { Provider } from 'react-redux';
import { queryClient } from '@/react-query/queryClient';

type LayoutType = {
  Component: any;
  children: ReactNode;
};

const Layout = ({ Component, children }: LayoutType) => {
  const {
    asPath, // the value: "/question/how-do-you-get-the-current-url-in-nextjs/"
    pathname, // the value: "/question/[slug]"
  } = useRouter();
  const slicePath = asPath.split('/')[1] === 'admin';

  return Component.getLayout ? (
    slicePath ? (
      Component.getLayout(
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            {/* <CKEditorContext context={Context}> */}
            <Adminlayout>{children}</Adminlayout>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={true}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            {/* </CKEditorContext> */}

            {/* <ReactQueryDevtoolsPanel /> */}
          </QueryClientProvider>
        </Provider>
      )
    ) : (
      Component.getLayout(
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <QueryClientProvider client={queryClient}>
              <Mainlayout>{children}</Mainlayout>
              {/* <ReactQueryDevtoolsPanel /> */}
              <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={true}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              
            />
            </QueryClientProvider>
          </PersistGate>
        </Provider>
      )
    )
  ) : (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Provider>

      {/* <ReactQueryDevtoolsPanel /> */}
    </QueryClientProvider>
  );
};

export default Layout;
