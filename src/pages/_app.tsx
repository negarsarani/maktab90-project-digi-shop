import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '@/styles/Theme/Theme';
import createEmotionCache from '../utility/createEmotionCache';
import Mainlayout from '@/layout/Mainlayout';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const clientSideEmotionCache = createEmotionCache();
export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  if (Component.getLayout) {
    return Component.getLayout(
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    );
  }
  // console.log(Component.getLayout());

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Mainlayout>
          <Component {...pageProps} />
        </Mainlayout>
      </ThemeProvider>
    </CacheProvider>
  );
}
