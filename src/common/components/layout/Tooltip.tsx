import React, { ReactNode } from 'react';
import ReactTooltip, { TooltipProps } from 'react-tooltip';

type Props = {
  children: ReactNode;
  text: string;
  options?: TooltipProps;
  id: string;
};
function Tooltip({ children, text, id, options }: Props) {
  return (
    <React.Fragment>
      <span data-for={id} data-tip={text}>
        {children}
      </span>
      <ReactTooltip
        {...options}
        effect="solid"
        place={options?.place || 'bottom'}
        id={id}
        arrowColor="white"
        delayHide={100}
        delayUpdate={100}
      >
        {}
      </ReactTooltip>
    </React.Fragment>
  );
}

export default Tooltip;
