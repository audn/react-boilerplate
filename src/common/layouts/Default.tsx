import Router from 'next/router';
import { ReactNode } from 'react';
import { trackPageview } from '../utils/analytics';

Router.events.on('routeChangeComplete', (url) => {
  trackPageview(url);
});

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container flex flex-col min-h-screen ">
      <div className={'flex-1 w-full text-on-naked-100'}>{children}</div>
    </div>
  );
};
