import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { IDropdown } from '../../lib/interfaces';
import listenForOutsideClick from '../../utils/helpers/listenForOutsideClick';
import DropdownWrapper from './components/DropdownWrapper';
import ListItem from './components/ListItem';

function Dropdown({
  children,
  list,
  options = { caret: true, position: 'center' },
}: IDropdown) {
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
    <div ref={menuRef} onClick={toggle} className="relative mx-auto">
      <button className="flex items-center">
        {children}
        {options?.caret && (
          <span className="flex-shrink-0 w-6 text-base text-right ">
            <i className="fa-regular fa-angle-down" />
          </span>
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <DropdownWrapper>
            {list.map((item, i) => (
              <ListItem {...item} key={i} />
            ))}
          </DropdownWrapper>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dropdown;
