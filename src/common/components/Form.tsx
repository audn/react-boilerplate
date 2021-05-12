import React, { forwardRef } from 'react';
import {
  IFormGroup,
  IForm,
  IInput,
  ITextArea,
  ICheckbox,
  IFormLabel,
} from '../lib/interfaces';

const FormGroup = ({ className = 'w-full', children }: IFormGroup) => {
  return <div className={`${className}`}>{children}</div>;
};
const FormLabel = ({ title, description }: IFormLabel) => {
  return (
    <>
      <h1 className="font-semibold text-on-hero-title">{title}</h1>
      {description && (
        <div className="mt-2 text-sm text-on-hero-default font-regular">
          {description}
        </div>
      )}
    </>
  );
};
const Form = {
  Layout: (props: IForm) => {
    return (
      <form {...props}>
        <div className="flex flex-wrap">{props.children}</div>
      </form>
    );
  },
  Group: FormGroup,
  Input: forwardRef(
    ({
      id,
      title,
      description,
      icon,
      ref,
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
            <FormLabel title={title} description={description} />
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
              required={required}
              minLength={minLength}
              maxLength={maxLength}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
              className={`input-field bg-input-hero-25 ring-2 ring-input-hero-50 focus:ring-input-hero-75 text-input-hero-200  focus:text-white placeholder-input-hero-200 ${
                icon && 'pl-10'
              }`}
            />
          </div>
          {error && (
            <div
              id="validation__error"
              className="mt-3 text-sm font-semibold text-red-400 opacity-95"
            >
              <i className="mr-3 text-xs fad fa-exclamation-triangle" />
              {error}
            </div>
          )}
        </FormGroup>
      );
    },
  ),
  TextArea: forwardRef(
    ({
      id,
      title,
      description,
      required,
      maxLength,
      placeholder,
      onChange,
      value,
      error,
    }: ITextArea) => {
      return (
        <FormGroup>
          <label htmlFor={id} className="block mb-4 text-base text-on-150">
            <FormLabel title={title} description={description} />
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
                className="input-field"
              />
            </div>
          </div>
          {error && (
            <div
              id="validation__error"
              className="mt-3 text-sm font-semibold text-red-400 opacity-95"
            >
              <i className="mr-3 text-xs fad fa-exclamation-triangle" />
              {error}
            </div>
          )}
        </FormGroup>
      );
    },
  ),
  CheckBox: forwardRef(({ id, title, required }: ICheckbox) => {
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
  }),
};

export default Form;
