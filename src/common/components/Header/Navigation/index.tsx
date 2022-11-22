import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { fadeIn } from '../../../utils/data/animations';
import Animate from '../../layout/Animate';
import Hamburger from './components/Hamburger';
import DesktopMenu from './Desktop';
import PhoneMenu from './Phone';

function Navigation() {
  const [isOpenPhoneMenu, setIsOpenPhoneMenu] = useState<boolean>(false);
  return (
    <div>
      <DesktopMenu />
      <Hamburger onClick={setIsOpenPhoneMenu} isOpen={isOpenPhoneMenu} />
      <AnimatePresence>
        {isOpenPhoneMenu && (
          <Animate variants={fadeIn}>
            <PhoneMenu />
          </Animate>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navigation;
