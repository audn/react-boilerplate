import { Form } from '../../../lib/interfaces';
import concat from '../../../utils/helpers/concat';
import { validateRegex } from '../../../utils/helpers/regex/validator';
import FormError from '../components/FormError';
import FormLabel from '../components/FormLabel';

function Textarea({
  value,
  onChange,
  label,
  id,
  placeholder,
  error,
  inputClassName,
  disabled,
  maxLength,
  minLength,
  description,
  regex,
}: Form.Textarea) {
  const getErrors = () => {
    if (error) {
      return error;
    } else return validateRegex({ value, regex }) as string;
  };
  return (
    <div className="max-w-full">
      <div className="flex items-center justify-between">
        {label && (
          <FormLabel
            id={id}
            description={description}
            disabled={disabled}
            label={label}
          />
        )}
        {minLength && minLength - Number(value?.length) >= 1 && (
          <span className="text-sm font-semibold text-on-200">
            {minLength - Number(value?.length)}
          </span>
        )}
      </div>
      <textarea
        placeholder={placeholder}
        id={id}
        disabled={disabled}
        value={value}
        maxLength={maxLength}
        minLength={minLength}
        onChange={(event) => onChange(event.target.value)}
        className={concat(
          inputClassName ? inputClassName : '',
          disabled
            ? 'bg-opacity-50 cursor-not-allowed text-on-200 after:!text-on-150'
            : 'focus:ring-2',
          'w-full h-full px-5 py-4 transition duration-150 ease-out rounded-lg outline-none scrollbar-none bg-types-50 focus:ring-2 ring-types-200 input-field',
        )}
      />
      <FormError label={getErrors()} />
    </div>
  );
}

export default Textarea;
