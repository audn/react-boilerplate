import { ILayout } from '../lib/interfaces';

import Router from 'next/router';
import { trackPageview } from '../utils/analytics';

Router.events.on('routeChangeComplete', (url) => {
  trackPageview(url);
});

export const DefaultLayout = ({ children }: ILayout) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className={'flex-1'}>
        <main className="w-full text-on-naked-100">{children}</main>
      </div>
    </div>
  );
};
