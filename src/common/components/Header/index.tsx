import { INavItem } from '../../lib/interfaces';
import concat from '../../utils/helpers/concat';
import Dropdown from '../Dropdown';
import Link from '../layout/Link';
import routes from './routes';

export const Header = () => {
  const dropdown = [
    {
      label: 'My profile',
      icon: 'fa-solid fa-user',
      route: '#',
    },
    {
      label: 'Sign out',
      className: 'hover:!bg-opacity-10 hover:!bg-red-500 hover:!text-red-500',
      icon: 'fa-solid fa-sign-out-alt',
      route: '#',
    },
  ] as INavItem[];
  return (
    <header className="container sticky top-0 z-50 py-5 bg-header-100 text-on-header-100 ">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          MyApp
        </Link>
        <Dropdown list={dropdown}>
          <div>click me</div>
        </Dropdown>
        <div className="flex">
          {routes.map((x) => (
            <Link href={x.route}>
              <div className="inline-flex items-center justify-between w-full px-3 py-2 text-base font-semibold rounded-md cursor-pointer animate sm:mt-0 hover:bg-header-200 hover:text-white bg-header-150">
                <i className={concat(x.icon?.join(' '))} /> {x.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
