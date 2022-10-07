import { useRouter } from 'next/router';
import { INavItem } from '../../../lib/interfaces';
import concat from '../../../utils/helpers/concat';
import { validateUrl } from '../../../utils/helpers/regex/url';

function ListItem({ label, icon, onClick, route, className }: INavItem) {
  const router = useRouter();
  function handleClick() {
    if (route) {
      if (validateUrl(route)) {
        window.open(route, '_blank');
      } else {
        router.push(route);
      }
    } else onClick!();
  }
  return (
    <li
      className={concat(
        className ? className : '',
        'flex items-center px-3 py-2 rounded-lg cursor-pointer text-base font-semibold  hover:bg-types-200 animate hover:text-on-naked-150',
      )}
      onClick={handleClick}
    >
      {icon && (
        <div className="flex-shrink-0 w-6 text-sm">
          <i className={`${icon}`} />
        </div>
      )}
      {label}
    </li>
  );
}

export default ListItem;
