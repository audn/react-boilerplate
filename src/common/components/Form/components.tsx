import { ReactNode } from 'react';
import { Form } from '../../lib/interfaces';
import concat from '../../utils/helpers/concat';

export const Wrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
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
};

export const FormError = ({ label }: { label: string }) => {
  if (label) {
    return (
      <div id="form-error" className={'block mb-3 font-bold text-red-500'}>
        {label}
      </div>
    );
  } else return <></>;
};

export const FormLabel = ({ disabled, label, description, id }: Form.Label) => {
  if (label) {
    return (
      <label
        className={concat(
          disabled ? 'text-on-200' : 'text-on-100',
          'block mb-3 font-bold ',
        )}
        htmlFor={id}
      >
        {label}
        {description && (
          <div className={`!font-normal mt-2  text-on-100`}>{description}</div>
        )}
      </label>
    );
  } else return <></>;
};
