import React, { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Mainlayout from './featured/Mainlayout';
import theme from '@/styles/Theme/Theme';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import createEmotionCache from '../utility/createEmotionCache';
import { QueryClient, QueryClientProvider } from 'react-query';
import Adminlayout from './featured/Adminlayout';
type LayoutType = {
  Component: any;
  children: ReactNode;
  emotionCache: any;
};
import store from '../redux/store';
import { Provider } from 'react-redux';
const Layout = ({ Component, children, emotionCache }: LayoutType) => {
  const clientSideEmotionCache = createEmotionCache();
  const queryClient = new QueryClient();

  const {
    asPath, // the value: "/question/how-do-you-get-the-current-url-in-nextjs/"
    pathname, // the value: "/question/[slug]"
  } = useRouter();
  const slicePath = asPath.split('/')[1] === 'admin';

  return Component.getLayout ? (
    slicePath ? (
      Component.getLayout(
        <QueryClientProvider client={queryClient}>
          <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
              <Provider store={store}>
                <Adminlayout>{children}</Adminlayout>
              </Provider>
            </ThemeProvider>
          </CacheProvider>
        </QueryClientProvider>
      )
    ) : (
      Component.getLayout(
        <QueryClientProvider client={queryClient}>
          <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
              <Provider store={store}>
                <Mainlayout>{children}</Mainlayout>
              </Provider>
            </ThemeProvider>
          </CacheProvider>
        </QueryClientProvider>
      )
    )
  ) : (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>{children}</Provider>
        </ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
};

export default Layout;
