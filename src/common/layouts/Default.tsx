import { NextSeo } from 'next-seo';
import Router from 'next/router';
import { ReactNode } from 'react';
import { trackPageview } from '../utils/analytics';

Router.events.on('routeChangeComplete', (url) => {
  trackPageview(url);
});

type Props = {
  children: ReactNode;
  title?: string;
  description?: string;
};
export const DefaultLayout = ({ children, title, description }: Props) => {
  return (
    <div className="container flex flex-col min-h-screen ">
      <NextSeo title={title} description={description} />

      <main className={'flex-1 w-full text-on-naked-100'}>{children}</main>
    </div>
  );
};
