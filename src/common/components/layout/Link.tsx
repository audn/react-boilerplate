import NextLink from 'next/link';
import { ReactNode } from 'react';
import { validateUrl } from '../../utils/helpers/regex/url';

function Link({
  children,
  rel,
  href,
  ...props
}: {
  children: ReactNode;
  rel?: 'author' | 'me';
  className?: string;
  href: string;
}) {
  return (
    <NextLink href={href}>
      <a
        {...props}
        target={validateUrl(href) ? '_blank' : '_self'}
        rel={validateUrl(href) ? 'external nofollow noopener' : rel ? rel : ''}
      >
        {children}
      </a>
    </NextLink>
  );
}

export default Link;
