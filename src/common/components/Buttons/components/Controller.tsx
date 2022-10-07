import { useRouter } from 'next/router';
import React, { ReactElement, SyntheticEvent } from 'react';
import { Button } from '../../../lib/interfaces';
import { redButton, smallButton } from '../styles';

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
      router.push(route);
    } else if (onClick) onClick(e);
  }
  function addButtonStyles() {
    const addons = [className];
    if (options?.size == 'sm') {
      addons.push(smallButton);
    }
    if (options?.style == 'danger') {
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
