import { ILayout } from '../lib/interfaces';

import { Footer } from '../components/Footer';
import SeoTags from '../components/SeoTags';

import { trackPageview } from '../utils/analytics';
import Router from 'next/router';

Router.events.on('routeChangeComplete', (url) => {
  trackPageview(url);
});

export const DefaultLayout = ({ title, desc, url, children }: ILayout) => {
  return (
    <div className="flex flex-col min-h-screen">
      <SeoTags title={title} desc={desc} url={url} />
      <div className={'flex-1'}>
        <main className="w-full text-on-naked-100">{children}</main>
      </div>
      <Footer />
    </div>
  );
};
