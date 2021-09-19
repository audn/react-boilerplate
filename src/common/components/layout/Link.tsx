import NextLink from 'next/link';
import React from 'react';
import { IBaseComponent } from '../../lib/interfaces';
import { validateUrl } from '../../utils/helpers/regex/url';

function Link({ children, href, ...props }: IBaseComponent & { href: string }) {
  return (
    <NextLink href={href}>
      <a {...props} target={validateUrl(href) ? '_blank' : '_self'}>
        {children}
      </a>
    </NextLink>
  );
}

export default Link;
