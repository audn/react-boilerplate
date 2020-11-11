import React from 'react';
import Router from 'next/router';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { trackPageview } from '../../utility/data/Analytics';

Router.events.on('routeChangeComplete', (url) => {
  trackPageview(url);
});

export const DefaultLayout = (props: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen bg-gray-200">
    <Header />
    <main className="flex-1 w-full max-w-6xl p-4 mx-auto md:px-8 md:py-16">
      {props.children}
    </main>
    <Footer />
  </div>
);
