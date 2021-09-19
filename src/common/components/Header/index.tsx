import Layout from '../layout/Layout';
import Link from '../layout/Link';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 py-5 bg-header-100 text-on-header-100">
      <Layout.Container center>
        <div className="items-center justify-between sm:flex sm:flex-no-wrap ">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-white">
              MyApp
            </Link>
          </div>
        </div>
      </Layout.Container>
    </header>
  );
};
