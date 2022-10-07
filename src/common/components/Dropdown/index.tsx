import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { IDropdown } from '../../lib/interfaces';
import { fadeInFromBottomAndOutBottom } from '../../utils/data/animations';
import listenForOutsideClick from '../../utils/helpers/listenForOutsideClick';
import Animate from '../layout/Animate';
import ListItem from './components/ListItem';

function Dropdown({ children, list, options }: IDropdown) {
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(
    listenForOutsideClick({
      listening,
      setListening,
      menuRef,
      setIsOpen,
    }),
  );
  return (
    <div ref={menuRef} onClick={toggle} className="relative">
      <button className="flex">
        {children} <i className="fa-solid fa-angle-down" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <Animate
            variants={fadeInFromBottomAndOutBottom}
            className="absolute right-0 top-10 shadow-lg min-w-[200px] border border-types-150 rounded-lg"
          >
            <ul className="p-2 space-y-1 rounded-lg whitespace-nowrap text-on-100 bg-types-100">
              {list.map((item, i) => (
                <ListItem {...item} key={i} />
              ))}
            </ul>
          </Animate>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dropdown;
