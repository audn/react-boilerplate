import React from 'react';

import { IButtonGroup, IButton } from '../lib/interfaces';
import Link from 'next/link';

const options = ({ className }: { className: string | undefined }) => {
  if (className) {
    return className;
  }
  return `disabled:bg-opacity-50 disabled:hover:bg-opacity-50 disabled:cursor-not-allowed disabled:text-opacity-50 disabled:hover:text-opacity-40`;
};

// todo: <Button.Primary size={base | lg | xl}/>

const ButtonGroup = ({ className, children }: IButtonGroup) => {
  return (
    <div
      className={`${
        className && className
      } box-border flex items-center flex-wrap`}
    >
      {children}
    </div>
  );
};

const Button = {
  Group: ButtonGroup,
  Primary: ({ route, onClick, disabled, title, icon, className }: IButton) => {
    return (
      <Link href={route ? route : '#'}>
        <a className="w-full sm:w-auto ">
          <button
            className={
              `active:ring-brand-primary-lighter ring-brand-primary-light btn-base bg-brand-primary hover:bg-brand-primary-dark text-white active:bg-brand-primary disabled:hover:bg-brand-primary  ` +
              options({ className })
            }
            onClick={onClick}
            disabled={disabled}
          >
            {icon && icon} {title}
          </button>
        </a>
      </Link>
    );
  },
  Secondary: ({
    route,
    onClick,
    disabled,
    title,
    icon,
    className,
  }: IButton) => {
    return (
      <Link href={route ? route : '#'}>
        <a className="w-full sm:w-auto ">
          <button
            className={
              `btn-base bg-brand-secondary hover:bg-brand-secondary-dark text-on-button-secondary active:bg-brand-secondary disabled:hover:bg-brand-secondary active:ring-brand-secondary-lighter ring-brand-secondary-light ` +
              options({ className })
            }
            onClick={onClick}
            disabled={disabled}
          >
            {icon && icon} {title}
          </button>
        </a>
      </Link>
    );
  },
  Ghost: ({ route, onClick, disabled, title, icon, className }: IButton) => {
    return (
      <Link href={route ? route : '#'}>
        <a className="w-full sm:w-auto ">
          <button
            className={
              `btn-base ring-2 ring-brand-secondary hover:ring-brand-secondary-hover  text-on-button-ghost hover:text-white active:text-white active:ring-brand-secondary disabled:text-on-naked-default disabled:hover:text-on-button-ghost disabled:hover:ring-brand-secondary ` +
              options({ className })
            }
            onClick={onClick}
            disabled={disabled}
          >
            {icon && icon} {title}
          </button>
        </a>
      </Link>
    );
  },
  Underline: ({
    route,
    onClick,
    disabled,
    title,
    icon,
    className,
  }: IButton) => {
    return (
      <Link href={route ? route : '#'}>
        <a className="w-full sm:w-auto ">
          <button
            className={
              `btn-base ring-b-2 ring-transparent hover:ring-brand-primary-hover text-on-button-ghost hover:text-brand-primary-hover active:text-brand-primary active:ring-brand-primary disabled:hover:ring-transparent disabled:text-on-naked-default disabled:bg-opacity-50 disabled:hover:ring-brand-secondary !rounded-none ` +
              options({ className })
            }
            onClick={onClick}
            disabled={disabled}
          >
            {icon && icon} {title}
          </button>
        </a>
      </Link>
    );
  },
};

export default Button;
