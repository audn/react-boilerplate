import { ReactNode } from 'react';
import concat from '../../utils/helpers/concat';

export const Wrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={concat(className ? className : '', 'flex space-x-5')}>
      {children}
    </div>
  );
};
