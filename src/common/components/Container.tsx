import React from 'react';
import { IContainer } from '../lib/interfaces';
import concat from '../utils/helpers/concat';

function Container({ children, alignContent }: IContainer) {
  const options = (alignContent: string | undefined) => {
    if (alignContent === 'left') {
      return 'sm:items-left text-left';
    } else if (alignContent === 'center') {
      return 'sm:items-center text-center';
    } else if (alignContent === 'right') {
      return 'sm:items-end text-right';
    }
  };
  return (
    <div className={`px-6 md:px-8 w-full`}>
      <div className={concat('container flex flex-col', options(alignContent))}>
        {children}
      </div>
    </div>
  );
}

export default Container;
