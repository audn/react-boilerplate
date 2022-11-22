import { useRouter } from 'next/router';
import React, { ReactElement, SyntheticEvent } from 'react';
import { Button } from '../../../lib/interfaces';
import { validateUrl } from '../../../utils/helpers/regex/url';

function ButtonController({
  route,
  onClick,
  children,
  layoutClass,
  className,
}: Button.Base & { children: ReactElement }) {
  const router = useRouter();
  function handleClick(e: SyntheticEvent) {
    e.stopPropagation();
    if (route) {
      if (validateUrl(route)) {
        window.open(route);
      } else router.push(route);
    } else if (onClick) onClick(e);
  }

  return (
    <span className={layoutClass ? layoutClass : ''} onClick={handleClick}>
      {React.cloneElement(children, { className })}
    </span>
  );
}

export default ButtonController;
