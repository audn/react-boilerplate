import React, { useState } from 'react';
import Link from 'next/link';
// import { AnimatePresence, motion } from 'framer-motion';

import NavItem from './components/NavItem';
import routes from './routes';
// import { fadeIn } from '../../utils/data/animations';

export const Header = () => {
  const [isPhoneMenuOpen, setPhoneMenu] = useState(false);
  return (
    <header className="z-50 sticky top-0 bg-header-25 text-on-header border-b-2 border-types-50 px-6 md:px-8 py-4">
      <div className="sm:flex sm:flex-no-wrap items-center justify-between container">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="font-bold text-white text-xl">MyApp</a>
          </Link>
          <div
            className="flex sm:hidden cursor-pointer bg-header-125  w-8 h-8 items-center justify-center rounded-md text-white"
            onClick={() => setPhoneMenu(!isPhoneMenuOpen)}
          >
            <i className={isPhoneMenuOpen ? 'far fa-times' : 'far fa-bars'} />
          </div>
        </div>
        <div
          className={`${
            isPhoneMenuOpen ? `block sm:mt-0 mt-6` : `hidden`
          }  sm:flex flex-col sm:flex-row sm:items-center sm:justify-center text-sm gap-1 sm:w-auto select-none`}
        >
          {routes.map(({ title, route }, i) => (
            <NavItem title={title} route={route} key={i} />
          ))}
        </div>
      </div>
    </header>
  );
};
