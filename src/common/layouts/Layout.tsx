import React from 'react';
import Router from 'next/router';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import SeoTags from '../components/SeoTags';

import { trackPageview } from '../utils/data/analytics';
import { ILayout } from '../lib/interfaces';

Router.events.on('routeChangeComplete', (url) => {
  trackPageview(url);
});

export const Layout = ({ title, desc, url, children }: ILayout) => {
  return (
    <div className="flex flex-col min-h-screen bg-types-25 ">
      <SeoTags
        title={title ? title : `Page | Boilerplate`}
        desc={
          desc
            ? desc
            : 'Simple, pre-setup and free-to-use front-end boilerplate including React, Next.js & TailwindCSS'
        }
        url={url}
      />
      <Header />
      <div className={'flex-1 '}>
        <main className=" w-full text-on-naked-default">{children}</main>
      </div>
      <Footer />
    </div>
  );
};
