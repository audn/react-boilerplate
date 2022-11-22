import { ReactNode } from 'react';
import concat from '../../../utils/helpers/concat';

function H1({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={concat(
        className ? className : '',
        'text-3xl md:text-[3rem] font-semibold md:font-bold !leading-[3rem] md:!leading-[4rem] tracking-[-.015em]',
      )}
    >
      {children}
    </h1>
  );
}

export default H1;
