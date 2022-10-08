import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { fadeIn } from '../../../../utils/data/animations';
import Animate from '../../../layout/Animate';
import DesktopMenu from '../Desktop';
import Hamburger from '../Hamburger';
import PhoneMenu from '../Phone';

function Navigation() {
  const [isOpenPhoneMenu, setIsOpenPhoneMenu] = useState<boolean>(false);
  return (
    <React.Fragment>
      <DesktopMenu />
      <div>
        <Hamburger onClick={setIsOpenPhoneMenu} isOpen={isOpenPhoneMenu} />
        <AnimatePresence>
          {isOpenPhoneMenu && (
            <Animate variants={fadeIn}>
              <PhoneMenu />
            </Animate>
          )}
        </AnimatePresence>
      </div>
    </React.Fragment>
  );
}

export default Navigation;
