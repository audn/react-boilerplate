import React from 'react';

interface Props {
  toggleMenu: () => void | Promise<void>;
  isPhoneMenuOpen: boolean;
}

function MenuToggle({ toggleMenu, isPhoneMenuOpen }: Props) {
  return (
    <div
      className="flex sm:hidden cursor-pointer bg-header-150 w-8 h-8 items-center justify-center rounded-md text-white"
      onClick={toggleMenu}
    >
      <i className={isPhoneMenuOpen ? 'far fa-times' : 'far fa-bars'} />
    </div>
  );
}

export default MenuToggle;
