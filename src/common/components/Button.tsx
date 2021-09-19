import Link from 'next/link';
import { validateUrl } from '../utils/helpers/regex/url';
import { ReactNode } from 'react';
import concat from '../utils/helpers/concat';
import { IBaseComponent, IButton } from '../lib/interfaces';

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
        <a target={route && validateUrl(route) ? '_blank' : '_self'}>
          {children}
        </a>
      </Link>
    );
  } else return <>{children}</>;
};

const ButtonGroup = ({ className, children }: IBaseComponent) => {
  return (
    <div
      className={concat(className, 'box-border flex items-center flex-wrap')}
    >
      {children}
    </div>
  );
};
const getSize = (size: 'sm' | 'md' | 'lg' | 'xl') => {
  switch (size) {
    case 'sm':
      return 'py-[0.5rem] px-[0.625rem] text-[0.8125rem] !border-1';
    case 'md':
      return 'py-[0.625rem] px-[0.95rem] text-base ';
    case 'lg':
      return 'py-3 px-12';
    case 'xl':
      return 'px-16 py-3';
    default:
      return '';
  }
};
const Button = {
  Group: ButtonGroup,
  Primary: ({
    route,
    onClick,
    disabled,
    title,
    icon,
    className,
    size,
  }: IButton) => {
    return (
      <Layout route={route}>
        <button
          className={concat(
            `bg-brand-primary-100 border-brand-primary-150 hover:bg-brand-primary-200 text-white leading-none rounded-lg font-semibold inline-flex animate items-center border-2`,
            className,
            getSize(size!),
          )}
          onClick={onClick}
          disabled={disabled}
        >
          {icon && <i className={icon.join(' ')} />} {title}
        </button>
      </Layout>
    );
  },
};

export default Button;
