import React from 'react';
import routes from '../routes';

import NavItem from './NavItem';

function MenuItems({
  isPhoneMenuOpen,
  toggleModal,
}: {
  isPhoneMenuOpen: boolean;
  toggleModal: () => void;
}) {
  return (
    <div
      className={`${
        isPhoneMenuOpen ? `block sm:mt-0 mt-6` : `hidden`
      }  sm:flex flex-col sm:flex-row sm:items-center sm:justify-center text-sm gap-1 sm:w-auto select-none`}
    >
      {routes.map(({ title, route, icon }, i) => (
        <NavItem
          title={title}
          route={route}
          key={i}
          toggleModal={toggleModal}
          icon={icon ? <i className={icon + ` mr-3 text-sm`} /> : ''}
        />
      ))}
    </div>
  );
}

export default MenuItems;
