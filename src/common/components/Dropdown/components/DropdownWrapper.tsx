import { ReactNode } from 'react';
import { dropdown } from '../../../utils/data/animations';
import Animate from '../../layout/Animate';

function DropdownWrapper({ children }: { children: ReactNode }) {
  return (
    <Animate
      variants={dropdown}
      className="absolute right-0 border rounded-lg shadow-lg top-10 bg-types-100 border-types-200 w-[200px] dropdown"
    >
      <ul className="max-w-[200px] p-2 overflow-y-auto max-h-96 scrollbar-content">
        {children}
      </ul>
    </Animate>
  );
}

export default DropdownWrapper;
