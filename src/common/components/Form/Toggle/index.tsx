import { Form } from '../../../lib/interfaces';
import concat from '../../../utils/helpers/concat';
import Circle from './components/Circle';

function Toggle({
  active,
  className,
  label,
  onClick,
  description,
  id,
  disabled,
  isLoading,
}: Form.Toggle) {
  return (
    <div className="flex">
      <label className={concat(className ? className : '', 'flex flex-col')}>
        {label && (
          <div className={'mb-2'}>
            <h1 className={`font-medium text-on-100 text-base`}>{label}</h1>
            {description && (
              <h3 className="mt-1 text-sm text-on-100 px-d3">{description}</h3>
            )}
          </div>
        )}
        <Circle
          id={id}
          active={active}
          disabled={disabled}
          isLoading={isLoading}
          onClick={onClick}
        />
      </label>
    </div>
  );
}

export default Toggle;
