import { ReactNode } from 'react';
import concat from '../../../utils/helpers/concat';

function Text({
  children,
  className,
}: {
  children: ReactNode | ReactNode[];
  className?: string;
}) {
  return (
    <span
      className={concat(
        className ? className : '',
        'text-base md:text-lg leading-9 text-on-50 whitespace-pre-line break-word w-full tracking-[-.025em]',
      )}
    >
      {children}
    </span>
  );
}

export default Text;
