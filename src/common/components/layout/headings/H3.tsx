import { ReactNode } from 'react';
import concat from '../../../utils/helpers/concat';

function H3({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={concat(
        className ? className : '',
        'text-xl md:text-2xl font-medium md:font-bold !leading-[3rem]',
      )}
    >
      {children}
    </h3>
  );
}

export default H3;
