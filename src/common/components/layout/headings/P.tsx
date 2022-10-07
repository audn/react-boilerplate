import { ReactNode } from 'react';
import concat from '../../../utils/helpers/concat';

function P({
  children,
  className,
  block,
}: {
  block?: boolean;
  children: ReactNode | ReactNode[];
  className?: string;
}) {
  if (Array.isArray(children) && block) {
    return (
      <div
        className={concat(
          className ? className : '',
          'text-base leading-8 whitespace-pre-line break-word w-full text-on-naked-100',
        )}
      >
        {children.map((x, i) => (
          <p className="block mt-2 first:mt-0" key={`paragraph_${i}`}>
            {x}
          </p>
        ))}
      </div>
    );
  } else
    return (
      <p
        className={concat(
          className ? className : '',
          'text-lg leading-8 whitespace-pre-line break-word w-full tracking-[-.025em]',
        )}
      >
        {children}
      </p>
    );
}

export default P;
