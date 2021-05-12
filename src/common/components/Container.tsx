import React from 'react';
import { IContainer } from '../lib/interfaces';

function Container({ children }: IContainer) {
  return (
    <div className={'px-6 md:px-8 w-full'}>
      <div className={'container '}>{children}</div>
    </div>
  );
}

export default Container;
