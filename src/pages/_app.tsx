import React from 'react';
import { AppProps } from 'next/app';

import '../assets/css/style.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { CookiesProvider } from 'react-cookie';

const queryClient = new QueryClient();

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} key={router.route} />
      </QueryClientProvider>
    </CookiesProvider>
  );
}
