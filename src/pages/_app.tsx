import { AppProps } from 'next/app';
import '../assets/css/style.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import Footer from '../common/components/Footer';
import { Header } from '../common/components/Header';
const queryClient = new QueryClient();

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <DefaultSeo {...SEO} />
      <div className="px-5 mt-24">
        <Component {...pageProps} key={router.route} />
      </div>
      <Footer />
    </QueryClientProvider>
  );
}
