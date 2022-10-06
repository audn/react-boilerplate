import React from 'react';
import { Form } from '../../../lib/interfaces';
import concat from '../../../utils/helpers/concat';

function Toggle({
  active,
  className,
  label,
  onClick,
  description,
  disabled,
  isLoading,
}: Form.Toggle) {
  return (
    <React.Fragment>
      <div className={concat(className ? className : '', 'flex flex-col')}>
        {label && (
          <div className={'mb-2'}>
            <h1 className={`font-medium text-on-100 text-base`}>{label}</h1>
            {description && (
              <h3 className="mt-1 text-sm text-on-100 px-d3">{description}</h3>
            )}
          </div>
        )}
        <button
          role="checkbox"
          disabled={disabled || isLoading}
          aria-checked="true"
          onClick={() => onClick(active ?? true)}
          className={concat(
            active ? 'bg-green-500' : 'bg-types-body',
            isLoading ? 'opacity-80 cursor-not-allowed' : '',
            'relative transition inline-flex flex-shrink-0 h-6 duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline disabled:cursor-not-allowed',
          )}
        >
          <span
            aria-hidden="true"
            className={concat(
              active ? 'translate-x-5 bg-white' : 'translate-x-0 bg-types-200',
              'relative inline-block w-5 h-5  transition duration-200 ease-in-out transform rounded-full shadow ',
            )}
          >
            <span
              className={concat(
                active ? 'opacity-100' : 'opacity-0',
                'absolute inset-0 flex items-center justify-center w-full h-full transition-opacity ease-out duration-75',
              )}
            >
              <svg
                className={concat('text-green-500 w-3 h-3')}
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"></path>
              </svg>
            </span>
          </span>
        </button>
      </div>
    </React.Fragment>
  );
}

export default Toggle;
