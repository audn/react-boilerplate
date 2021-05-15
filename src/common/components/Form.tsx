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

const color = (extract: string, colorScheme: string) => {
  if (extract === 'title') {
    switch (colorScheme) {
      case 'hero':
        return 'text-input-hero-label ';
      case 'naked':
        return 'text-input-naked-label ';
    }
  } else if (extract === 'inputField') {
    switch (colorScheme) {
      case 'hero':
        return 'bg-input-hero-25 ring-input-hero-50 text-input-hero-200 placeholder-input-hero-200 ';
      case 'naked':
        return 'bg-input-naked-25 ring-input-naked-50 text-input-naked-200 placeholder-input-hero-200 ';
    }
  }
};
const FormGroup = ({ className = 'w-full', children }: IFormGroup) => {
  return <div className={`${className} gap-10 `}>{children}</div>;
};

const FormLabel = ({ title, description, colorScheme }: IFormLabel) => {
  return (
    <>
      <h1 className={`font-semibold ` + color('title', colorScheme)}>
        {title}
      </h1>
      {description && (
        <div className="mt-2 text-sm text-on-hero-default">{description}</div>
      )}
    </>
  );
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
        <label htmlFor={id} className="block mb-4 text-base">
          <FormLabel
            title={title}
            description={description}
            colorScheme={colorScheme}
          />
        </label>
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
            className={
              `input-field ` +
              color('inputField', colorScheme) +
              (icon && '!pl-10')
            }
          />
        </div>
        {error && (
          <div className="mt-3 text-sm  text-red-400">
            <i className="mr-3 text-sm fad fa-exclamation-triangle" />
            {error}
          </div>
        )}
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
    className,
  }: ITextArea) => {
    return (
      <FormGroup>
        <div className={className ? className : ''}>
          <label htmlFor={id} className={`block mb-4 text-base text-on-150`}>
            <FormLabel
              title={title}
              description={description}
              colorScheme={colorScheme}
            />
          </label>
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
                className={`input-field ` + color('inputField', colorScheme)}
              />
            </div>
          </div>
          {error && (
            <div className="mt-3 text-sm font-semibold text-red-400">
              <i className="mr-3 text-xs fad fa-exclamation-triangle" />
              {error}
            </div>
          )}
        </div>
      </FormGroup>
    );
  },
  CheckBox: ({ id, title, required }: ICheckbox) => {
    return (
      <FormGroup>
        <div className="flex items-center">
          <input
            id={id}
            name={id}
            required={required}
            type="checkbox"
            className="w-4 h-4 transition duration-150 ease-in-out form-checkbox text-discord-primary"
          />
          <label
            htmlFor={id}
            className="block ml-2 text-sm leading-5 text-gray-900"
          >
            {title}
          </label>
        </div>
      </FormGroup>
    );
  },
};

export default Form;
