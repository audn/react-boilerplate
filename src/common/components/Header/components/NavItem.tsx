import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  title: string;
  route: string;
};

const NavItem = ({ route, title }: Props) => {
  const router = useRouter();

  const path = router.asPath;
  const activePage = route === path;

  const newTab = route.startsWith('https');

  if (newTab) {
    return (
      <a
        href={route}
        target={'_blank'}
        className={`${
          activePage ? 'sm:bg-header-125 text-white' : 'text-on-header'
        } px-3 py-2 rounded-md flex text-base`}
      >
        <div
          className={`font-semibold transition ease-in-out duration-200 block hover:text-white`}
        >
          {title}
        </div>
      </a>
    );
  } else
    return (
      <Link href={route}>
        <a
          className={`${
            activePage ? 'bg-header-125 text-white' : 'text-on-header'
          } px-3 py-2 rounded-md flex text-base`}
        >
          <div
            className={`font-medium transition ease-in-out duration-200 block hover:text-white`}
          >
            {title}
          </div>
        </a>
      </Link>
    );
};

export default NavItem;
