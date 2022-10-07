import { INavItem } from '../../../lib/interfaces';
import Dropdown from '../../Dropdown';
import Link from '../../layout/Link';

function NavItem({ route, icon, label, list }: INavItem) {
  function Label() {
    return (
      <span className="flex items-center hover:text-white animate">
        {label}
        {icon && (
          <div className="w-6 text-base text-right">
            <i className={`${icon}`} />
          </div>
        )}
      </span>
    );
  }
  return (
    <Link
      href={route}
      className="inline-flex items-center justify-between w-full px-3 py-2 text-base font-semibold rounded-md cursor-pointer sm:mt-0 hover:bg-header-200 bg-header-150"
    >
      {list ? (
        <Dropdown list={list} options={{ caret: false }}>
          <Label />
        </Dropdown>
      ) : (
        <Label />
      )}
    </Link>
  );
}

export default NavItem;
