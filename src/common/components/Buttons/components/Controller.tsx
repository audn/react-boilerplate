import { useRouter } from 'next/router';
import React, { ReactElement, SyntheticEvent } from 'react';
import { Button } from '../../../lib/interfaces';
import { validateUrl } from '../../../utils/helpers/regex/url';
import { largeButton, redButton, smallButton } from '../styles';

function Controller({
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
    switch (options?.size) {
      case 'sm':
        addons.push(smallButton);
      case 'lg':
        addons.push(largeButton);
    }
    switch (options?.style) {
      case 'danger':
        addons.push(redButton);
    }
    return addons.join(' ');
  }
  return (
    <span className={layoutClass ? layoutClass : ''} onClick={handleClick}>
      {React.cloneElement(children, { className: addButtonStyles() })}
    </span>
  );
}

export default Controller;
