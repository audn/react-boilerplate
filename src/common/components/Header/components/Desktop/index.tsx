import { routes } from '../../routes';
import NavItem from './components/NavItem';

function DesktopMenu() {
  return (
    <div className="items-center hidden space-x-5 sm:flex">
      {routes.map((x, i) => (
        <NavItem {...x} key={i} />
      ))}
    </div>
  );
}

export default DesktopMenu;
