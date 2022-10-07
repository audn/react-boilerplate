import { Button } from '../../../lib/interfaces';
import concat from '../../../utils/helpers/concat';
import LoadingIcon from '../../misc/LoadingIcon';

function PrimaryButton({
  title,
  disabled,
  icon,
  isLoading,
  className,
}: Button.Base) {
  return (
    <button
      disabled={disabled}
      className={concat(
        className ? className : '',
        'flex items-center justify-center w-full px-[0.55rem] py-[0.45rem] font-semibold text-white bg-indigo-500 outline-none active:opacity-90 ring-0 focus:ring-types-150 focus:ring-4 rounded-md disabled:bg-types-100 hover:bg-indigo-600 animate disabled:opacity-50 text-[15px]',
      )}
    >
      {isLoading ? (
        <LoadingIcon />
      ) : (
        icon && (
          <span className="flex items-center mr-2 text-lg">
            <i className={icon} />
          </span>
        )
      )}

      {title}
    </button>
  );
}

export default PrimaryButton;
