import { ReactNode } from 'react';
import concat from '../../../utils/helpers/concat';

function FormWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={concat(
        className ? className : '',
        'flex flex-col sm:flex-row space-x-0 space-y-5 sm:space-y-0 sm:space-x-5',
      )}
    >
      {children}
    </div>
  );
}

export default FormWrapper;
