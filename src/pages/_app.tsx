import React from 'react';
import { AppProps } from 'next/app';
import '../assets/css/style.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { CookiesProvider } from 'react-cookie';
import { Header } from '../common/components/Header';

const queryClient = new QueryClient();

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} key={router.route} />
      </QueryClientProvider>
    </CookiesProvider>
  );
}
