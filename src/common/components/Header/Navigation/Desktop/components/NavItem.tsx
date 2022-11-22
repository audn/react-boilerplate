import { INavItem } from '../../../../../lib/interfaces';
import Dropdown from '../../../../Dropdown';
import Link from '../../../../layout/Link';

function NavItem({ route, icon, label, list }: INavItem) {
  function Label() {
    return (
      <span className="flex items-center animate">
        {label}
        {icon && (
          <div className="w-6 text-base text-right">
            <i className={`${icon}`} />
          </div>
        )}
      </span>
    );
  }
  if (list) {
    return (
      <Dropdown
        list={list}
        options={{ caret: true, box: true, animateCaret: true }}
      >
        <Label />
      </Dropdown>
    );
  } else
    return (
      <Link
        href={route ?? '#'}
        className="inline-flex items-center justify-between w-full text-base font-medium rounded-md cursor-pointer sm:mt-0 hover:bg-header-200 bg-header-150 text-on-50 hover:text-white"
      >
        <Label />
      </Link>
    );
}

export default NavItem;
