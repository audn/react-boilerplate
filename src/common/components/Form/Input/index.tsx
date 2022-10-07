import { Form } from '../../../lib/interfaces';
import concat from '../../../utils/helpers/concat';
import { validateRegex } from '../../../utils/helpers/regex/validator';
import { FormError, FormLabel } from '../components';

function Input({
  value,
  type,
  label,
  onChange,
  id,
  disabled,
  placeholder,
  error,
  inputClassName,
  description,
  regex,
}: Form.Input) {
  const getErrors = () => {
    if (error) {
      return error;
    } else return validateRegex({ value, regex }) as string;
  };

  return (
    <div className="w-full ">
      <FormLabel
        id={id}
        description={description}
        disabled={disabled}
        label={label}
      />
      <input
        placeholder={placeholder}
        id={id}
        type={type}
        disabled={disabled}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={concat(
          inputClassName ? inputClassName : '',
          disabled
            ? 'bg-opacity-50 cursor-not-allowed text-on-200 after:!text-on-150'
            : 'focus:ring-2',
          'w-full px-5 py-4 transition duration-150 ease-out rounded-lg outline-none scrollbar-none bg-types-100  ring-types-200 input-field',
        )}
      />
      <FormError label={getErrors()} />
    </div>
  );
}

export default Input;