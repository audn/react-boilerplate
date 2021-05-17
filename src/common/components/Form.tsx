import { fadeOutTop } from '../utils/data/animations';
import { motion } from 'framer-motion';

import {
  IFormGroup,
  IForm,
  IInput,
  ITextArea,
  ICheckbox,
  IFormLabel,
} from '../lib/interfaces';
import concat from '../utils/helpers/concat';

const color = (extract: string, colorScheme: string) => {
  if (extract === 'title') {
    switch (colorScheme) {
      case 'naked':
        return 'text-input-naked-900';
    }
  }
  if (extract === 'description') {
    switch (colorScheme) {
      case 'naked':
        return 'text-input-naked-800';
    }
  } else if (extract === 'inputField') {
    switch (colorScheme) {
      case 'naked':
        return 'bg-input-naked-100 ring-input-naked-150 placeholder-input-naked-800 text-input-naked-900';
    }
  }
};
const FormGroup = ({ className = 'w-full', children }: IFormGroup) => {
  return <div className={`${className} gap-10 `}>{children}</div>;
};

const FormLabel = ({ title, description, colorScheme, id }: IFormLabel) => {
  return (
    <label htmlFor={id} className="block mb-4 text-base">
      <h1 className={`font-semibold ` + color('title', colorScheme)}>
        {title}
      </h1>
      {description && (
        <div className={`mt-2 text-sm ` + color('description', colorScheme)}>
          {description}
        </div>
      )}
    </label>
  );
};
const FormError = ({ error }: { error: false | string }) => {
  if (error) {
    return (
      <div className="mt-3 text-sm text-red-400">
        <i className="mr-3 text-sm fad fa-exclamation-triangle" />
        {error}
      </div>
    );
  } else return <></>;
};
const Form = {
  Layout: ({ onSubmit, children, hasSubmitted }: IForm) => {
    if (!hasSubmitted) {
      return (
        <motion.form
          onSubmit={onSubmit}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={fadeOutTop}
        >
          <div className="flex flex-col">{children}</div>
        </motion.form>
      );
    } else
      return (
        <motion.div
          onSubmit={onSubmit}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={fadeOutTop}
        >
          Thank you!
        </motion.div>
      );
  },
  Group: FormGroup,
  Input: ({
    id,
    colorScheme,
    title,
    description,
    icon,
    ref,
    type,
    required,
    minLength,
    maxLength,
    placeholder,
    onChange,
    value,
    error,
  }: IInput) => {
    return (
      <FormGroup>
        <FormLabel
          title={title}
          description={description}
          colorScheme={colorScheme}
          id={id}
        />
        <div className="relative mt-1 rounded-md shadow-sm">
          {icon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {icon}
            </div>
          )}
          <input
            id={id}
            name={id}
            ref={ref}
            type={type}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={concat(
              'input-field',
              color('inputField', colorScheme),
              icon ? '!pl-10' : '',
            )}
          />
        </div>
        <FormError error={error} />
      </FormGroup>
    );
  },
  TextArea: ({
    id,
    colorScheme,
    title,
    description,
    required,
    maxLength,
    placeholder,
    onChange,
    value,
    error,
    className = '',
  }: ITextArea) => {
    return (
      <FormGroup>
        <div className={className}>
          <FormLabel
            title={title}
            description={description}
            colorScheme={colorScheme}
            id={id}
          />
          <div className="relative mt-1">
            <div className="flex rounded-md shadow-sm">
              <textarea
                id={id}
                name={id}
                required={required}
                maxLength={maxLength}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                rows={3}
                className={concat(
                  'input-field',
                  color('inputField', colorScheme),
                )}
              />
            </div>
          </div>
          <FormError error={error} />
        </div>
      </FormGroup>
    );
  },
  CheckBox: ({
    id,
    title,
    required,
    className,
    colorScheme,
    onChange,
    checked,
    error,
  }: ICheckbox) => {
    return (
      <FormGroup>
        <div className={`relative flex items-center ` + className}>
          <div className={'check flex  flex-col'}>
            <label
              htmlFor={id}
              className={concat(
                'ml-10 block text-base leading-5 cursor-pointer select-none',
                color('title', colorScheme),
              )}
            >
              {title}
            </label>
            <input
              id={id}
              name={id}
              onChange={onChange}
              checked={checked}
              required={required}
              type="checkbox"
              className="absolute left-0 opacity-0"
            />
            <span
              className="absolute left-0 w-6 h-6 rounded checkmark cursor-pointer bg-types-100 "
              onClick={onChange}
            />
            <div className={'!mt-3'}>
              <FormError error={error} />
            </div>
          </div>
        </div>
      </FormGroup>
    );
  },
};

export default Form;
