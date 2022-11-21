import { useRouter } from 'next/router';
import React, { ReactElement, SyntheticEvent } from 'react';
import { Button } from '../../../lib/interfaces';
import { validateUrl } from '../../../utils/helpers/regex/url';
import { danger, largeButton, smallButton, warn } from '../styles';

function ButtonController({
  route,
  onClick,
  children,
  layoutClass,
  options,
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
  function addButtonStyles() {
    const addons = [className];
    if (options?.size == 'sm') {
      addons.push(smallButton);
    } else if (options?.size == 'lg') {
      addons.push(largeButton);
    }
    if (options?.style == 'danger') {
      addons.push(danger);
    } else if (options?.style == 'warn') {
      addons.push(warn);
    }

    return addons.join(' ');
  }

  return (
    <span className={layoutClass ? layoutClass : ''} onClick={handleClick}>
      {React.cloneElement(children, { className: addButtonStyles() })}
    </span>
  );
}

export default ButtonController;
