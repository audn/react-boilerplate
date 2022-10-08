import Logo from '../Logo';
import NavItem from './components/NavItem';
import { routes } from './routes';

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full px-6 py-5 bg-types-50 filter backdrop-blur bg-opacity-20">
      <div className="container flex items-center justify-between">
        <Logo />
        <div className="items-center hidden space-x-5 sm:flex">
          {routes.map((x) => (
            <NavItem {...x} />
          ))}
        </div>
        <div className="flex sm:hidden">
          <i className="fa-solid fa-bars" />
        </div>
      </div>
    </header>
  );
};
