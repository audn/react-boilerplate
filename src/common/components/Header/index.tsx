import concat from '../../utils/helpers/concat';
import Layout from '../layout/Layout';
import Link from '../layout/Link';
import routes from './routes';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 py-5 bg-header-100 text-on-header-100">
      <Layout.Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-white">
            MyApp
          </Link>
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
      </Layout.Container>
    </header>
  );
};
