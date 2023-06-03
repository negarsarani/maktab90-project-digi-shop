import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { QueryClientProvider } from '@tanstack/react-query';
import theme from '@/styles/Theme/Theme';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';
import {Mainlayout , Adminlayout} from './featured';
type LayoutType = {
  Component: any;
  children: ReactNode;
  emotionCache: any;
};
import { ToastContainer, toast } from 'react-toastify';
import { AnimatePresence } from 'framer-motion';

import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools';

import store from '../redux/store';
import { Provider } from 'react-redux';
import { queryClient } from '@/react-query/queryClient';
const Layout = ({ Component, children, emotionCache }: LayoutType) => {
  const {
    asPath, // the value: "/question/how-do-you-get-the-current-url-in-nextjs/"
    pathname, // the value: "/question/[slug]"
  } = useRouter();
  const slicePath = asPath.split('/')[1] === 'admin';

  return Component.getLayout ? (
    slicePath ? (
      Component.getLayout(
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <QueryClientProvider client={queryClient}>
                <AnimatePresence mode="wait" initial={false}>
                  <Adminlayout>{children}</Adminlayout>
                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                  {/* <ReactQueryDevtoolsPanel /> */}
                </AnimatePresence>
              </QueryClientProvider>
            </Provider>
          </ThemeProvider>
        </CacheProvider>
      )
    ) : (
      Component.getLayout(
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <QueryClientProvider client={queryClient}>
                <AnimatePresence mode="wait" initial={false}>
                  <Mainlayout>{children}</Mainlayout>
                  {/* <ReactQueryDevtoolsPanel /> */}
                </AnimatePresence>
              </QueryClientProvider>
            </Provider>
          </ThemeProvider>
        </CacheProvider>
      )
    )
  ) : (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <AnimatePresence mode="wait" initial={false}>
              {children}
            </AnimatePresence>
          </Provider>

          {/* <ReactQueryDevtoolsPanel /> */}
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Layout;
