import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { IDropdown } from '../../lib/interfaces';
import concat from '../../utils/helpers/concat';
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
    <div ref={menuRef} onClick={toggle} className="relative w-[fit-content]">
      <button
        className={concat(
          options.box
            ? 'bg-types-100 px-3 text-sm py-[0.3rem] rounded-lg border hover:bg-types-150 animate shadow-lg border-types-150 hover:bg-types-200/50 focus:ring-2'
            : '',
          'flex items-center font-medium text-on-50',
        )}
      >
        {children}
        {options?.caret && (
          <span
            className={concat(
              options.animateCaret ? (isOpen ? 'rotate-180' : 'rotate-0') : '',
              'flex-shrink-0 ml-1 text-xs animate',
            )}
          >
            <i className="fa-solid fa-angle-down" />
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
