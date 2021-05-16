import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Navigation } from '../../../lib/types';
import { validateUrl } from '../../../utils/helpers/regex/url';

const NavItem = ({ route, title, icon }: Navigation) => {
  const router = useRouter();

  const path = router.asPath;
  const activePage = route === path;

  return (
    <NavLayout route={route}>
      <div
        className={`font-semibold animate flex items-center block w-full ${
          activePage
            ? 'bg-header-150 text-white'
            : 'text-on-header-900  hover:bg-opacity-50'
        } mt-3 sm:mt-0 hover:bg-types-100 group px-3 -mx-2 sm:-mx-0 py-2 rounded-md flex text-base justify-between`}
      >
        <div className={'flex items-center'}>
          <div className={'hidden sm:flex'}>{icon && icon}</div>

          {title}
        </div>

        {validateUrl(route) && (
          <div
            className={
              'sm:hidden bg-lightpill-100 text-on-lightpill-800 px-2 py-1 rounded flex-wrap whitespace-nowrap' +
              ' group-hover:bg-opacity-50 text-sm font-medium'
            }
          >
            <i className={'far fa-external-link mr-2 text-xs'} /> opens new tab
          </div>
        )}
      </div>
    </NavLayout>
  );
};

const NavLayout = ({
  route,
  children,
}: {
  route: string;
  children: ReactNode;
}) => {
  if (validateUrl(route)) {
    return (
      <a href={route} target={'_blank'}>
        {children}
      </a>
    );
  } else {
    return (
      <Link href={route}>
        <a href={route}>{children}</a>
      </Link>
    );
  }
};
export default NavItem;
