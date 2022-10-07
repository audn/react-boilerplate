import Link from '../layout/Link';
import NavItem from './components/NavItem';
import { routes } from './routes';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 px-6 py-5 mb-5 -mx-5 border-b border-types-200 bg-types-100 text-on-header-100">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          MyApp
        </Link>
        <div className="flex">
          {routes.map((x) => (
            <NavItem {...x} />
          ))}
        </div>
      </div>
    </header>
  );
};
