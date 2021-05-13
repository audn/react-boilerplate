import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Navigation } from '../../../lib/types';
import { validateUrl } from '../../../utils/helpers/regex/url';

const NavItem = ({ route, title, icon }: Navigation) => {
  const router = useRouter();

  const path = router.asPath;
  const activePage = route === path;

  if (validateUrl(route)) {
    return (
      <a
        href={route}
        target={'_blank'}
        className={`${
          activePage ? 'sm:bg-header-125 text-white' : 'text-on-header'
        } mt-6 sm:mt-0 hover:bg-types-75 group px-3 py-2 rounded-md flex text-base`}
      >
        <div
          className={`font-semibold transition ease-in-out flex items-center duration-200 block group-hover:text-white w-full`}
        >
          {icon && icon} {title}
        </div>
      </a>
    );
  } else
    return (
      <Link href={route}>
        <a
          className={`${
            activePage ? 'bg-header-125 text-white' : 'text-on-header'
          } px-3 py-2 rounded-md group flex text-base`}
        >
          <div
            className={`font-semibold transition ease-in-out flex items-center duration-200 block group-hover:text-white w-full`}
          >
            {icon && icon} {title}
          </div>
        </a>
      </Link>
    );
};

export default NavItem;
