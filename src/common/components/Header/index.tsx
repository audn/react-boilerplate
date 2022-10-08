import Link from '../layout/Link';
import NavItem from './components/NavItem';
import { routes } from './routes';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 px-6 py-5 mb-5 -mx-5 bg-types-50 filter backdrop-blur bg-opacity-20">
      <div className="container flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-on-">
          react-boilerplate
        </Link>
        <div className="flex items-center space-x-5">
          {routes.map((x) => (
            <NavItem {...x} />
          ))}
        </div>
      </div>
    </header>
  );
};
