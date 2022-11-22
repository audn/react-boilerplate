import { Form } from '../../../lib/interfaces';
import concat from '../../../utils/helpers/concat';

function FormLabel({ disabled, label, description, id }: Form.Label) {
  if (label) {
    return (
      <label
        className={concat(
          disabled ? 'text-on-200' : 'text-on-100',
          'block mb-3 font-bold text-left',
        )}
        htmlFor={id}
      >
        {label}
        {description && (
          <div className={`!font-normal mt-2 text-on-100`}>{description}</div>
        )}
      </label>
    );
  } else return <></>;
}

export default FormLabel;
