import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {  EmotionCache } from '@emotion/react';
import 'react-toastify/dist/ReactToastify.css';
import 'keen-slider/keen-slider.min.css'
import Layout from '@/layout';
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
export default function App({pageProps,Component}: MyAppProps) {

  return (
    <Layout Component={Component}>
      <Component {...pageProps} />
    </Layout>
  );
}
