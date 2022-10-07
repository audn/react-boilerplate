import { CSSProperties, ReactNode } from 'react';
import concat from '../../../utils/helpers/concat';

function H2({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}) {
  return (
    <h2
      {...props}
      className={concat(
        className ? className : '',
        'font-bold text-white text-2xl md:text-3xl !leading-[3rem]',
      )}
    >
      {children}
    </h2>
  );
}

export default H2;
