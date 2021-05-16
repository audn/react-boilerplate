import React, { useState } from 'react';
import Link from 'next/link';

import MenuToggle from './components/MenuToggle';
import MenuItems from './components/MenuItems';
import Container from '../Container';

export const Header = () => {
  const [isPhoneMenuOpen, setPhoneMenu] = useState(false);

  function toggleMenu() {
    setPhoneMenu(!isPhoneMenuOpen);
  }

  return (
    <header className="z-50 sticky top-0 bg-header-100 text-on-header-800 border-b-2 border-header-150 py-4">
      <Container>
        <div className="sm:flex sm:flex-no-wrap items-center justify-between ">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="font-bold text-white text-xl">MyApp</a>
            </Link>
            <MenuToggle
              toggleMenu={toggleMenu}
              isPhoneMenuOpen={isPhoneMenuOpen}
            />
          </div>
          <MenuItems isPhoneMenuOpen={isPhoneMenuOpen} />
        </div>
      </Container>
    </header>
  );
};
