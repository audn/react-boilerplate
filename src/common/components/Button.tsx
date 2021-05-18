import Link from 'next/link';

import { IButtonGroup, IButton } from '../lib/interfaces';

import { validateUrl } from '../utils/helpers/regex/url';
import { ReactNode } from 'react';
import concat from '../utils/helpers/concat';

const options = ({ className }: { className: string | undefined }) => {
  const disabledOptions = ` disabled:ring-opacity-50 disabled:bg-opacity-50 disabled:hover:bg-opacity-50 disabled:!cursor-not-allowed disabled:text-opacity-50 disabled:hover:text-opacity-40 disabled:hover:!scale-100 transform transform-disabled `;
  if (className) {
    return className + disabledOptions;
  } else return disabledOptions;
};

const ButtonGroup = ({ className, children }: IButtonGroup) => {
  return (
    <div
      className={concat(className, 'box-border flex items-center flex-wrap')}
    >
      {children}
    </div>
  );
};
const Layout = ({
  route,
  children,
}: {
  route?: string;
  children: ReactNode;
}) => {
  if (route) {
    return (
      <Link href={route}>
        <a
          className={'w-full sm:w-auto'}
          target={route && validateUrl(route) ? '_blank' : '_self'}
        >
          {children}
        </a>
      </Link>
    );
  } else return <>{children}</>;
};

const Button = {
  Group: ButtonGroup,
  Primary: ({ route, onClick, disabled, title, icon, className }: IButton) => {
    return (
      <Layout route={route}>
        <button
          className={
            `active:ring-brand-primary-300 ring-brand-primary-150 btn-base bg-brand-primary-100 hover:bg-brand-primary-50 text-white active:bg-brand-100 disabled:hover:bg-brand-primary-100 w-full sm:w-auto ` +
            options({ className })
          }
          onClick={onClick}
          disabled={disabled}
        >
          {icon && icon} {title}
        </button>
      </Layout>
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
      <Layout route={route}>
        <button
          className={
            `btn-base bg-brand-secondary-100 hover:bg-brand-secondary-50 text-on-button-secondary-900 active:bg-brand-secondary-100 disabled:hover:bg-brand-secondary-100 active:ring-brand-secondary-300 ring-brand-secondary-150 w-full sm:w-auto ` +
            options({ className })
          }
          onClick={onClick}
          disabled={disabled}
        >
          {icon && icon} {title}
        </button>
      </Layout>
    );
  },
};

export default Button;
