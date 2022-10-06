import { Form } from '../../../lib/interfaces';
import concat from '../../../utils/helpers/concat';
import { validateRegex } from '../../../utils/helpers/regex/validator';
import { FormLabel } from '../components';

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
  const checkRegex = () => {
    return validateRegex({ value, regex });
  };

  return (
    <div className="w-full">
      {checkRegex() ? 'true' : 'false'}
      {label && (
        <FormLabel
          id={id}
          description={description}
          disabled={disabled}
          label={label}
        />
      )}
      {}
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
          'w-full px-5 py-4 transition duration-150 ease-out rounded-lg outline-none scrollbar-none bg-types-100  ring-types-200',
        )}
      />
      {error}
    </div>
  );
}

export default Input;
