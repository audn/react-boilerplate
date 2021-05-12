import React from 'react';
import { AppProps } from 'next/app';
import '../assets/css/style.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} key={router.route} />
    </QueryClientProvider>
  );
}
