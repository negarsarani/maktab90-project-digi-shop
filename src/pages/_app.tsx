import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {  EmotionCache } from '@emotion/react';
import createEmotionCache from '../utility/createEmotionCache';
import { QueryClient, QueryClientProvider } from 'react-query';

import Layout from '@/layout';
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const clientSideEmotionCache = createEmotionCache();
const queryClient = new QueryClient();
export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <Layout Component={Component} emotionCache={emotionCache}>
      <Component {...pageProps} />
    </Layout>
  );
}
