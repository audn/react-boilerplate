import React from 'react';
import Link from 'next/link';

import { IButtonGroup, IButton } from '../lib/interfaces';

import { validateUrl } from '../utils/helpers/regex/url';

const options = ({ className }: { className: string | undefined }) => {
  const disabledOptions = ` disabled:ring-opacity-50 disabled:bg-opacity-50 disabled:hover:bg-opacity-50 disabled:!cursor-not-allowed disabled:text-opacity-50 disabled:hover:text-opacity-40 disabled:hover:!scale-100 transform avoid-transform `;
  if (className) {
    return className + disabledOptions;
  } else return disabledOptions;
};

const ButtonGroup = ({ className, children }: IButtonGroup) => {
  return (
    <div
      className={`${
        className ? className : ''
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
        <a
          className="w-full sm:w-auto"
          target={route && validateUrl(route) ? '_blank' : '_self'}
        >
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
      <Link href={route ? route : ''}>
        <a
          className="w-full sm:w-auto"
          target={route && validateUrl(route) ? '_blank' : '_self'}
        >
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
};

export default Button;
