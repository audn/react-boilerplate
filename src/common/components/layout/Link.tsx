import NextLink from 'next/link';
import React from 'react';
import { IBaseComponent } from '../../lib/interfaces';

function Link({ children, href, ...props }: IBaseComponent & { href: string }) {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  );
}

export default Link;
