import Logo from '../misc/Logo';
import NavItem from './components/NavItem';
import VercelMark from './components/VercelMark';
import { lists } from './routes';

function Footer() {
  return (
    <footer className="flex justify-center w-full mt-32 bg-types-100 text-white/80 sm:text-sm">
      <div className="grid w-full max-w-6xl gap-8 p-4 py-8 sm:grid-cols-4 sm:gap-y-16 sm:py-16">
        <div className="flex flex-col space-y-5 sm:block">
          <Logo />
          <VercelMark />
        </div>
        {lists.map((x, i) => (
          <nav className="flex flex-col gap-6 sm:gap-4" key={'list_' + i}>
            <h3 className="font-semibold">{x.label}</h3>
            <ul className="flex flex-col gap-4 sm:gap-2">
              {x.list.map((x, i) => (
                <NavItem {...x} key={i} />
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
