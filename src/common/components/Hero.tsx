import React from 'react';
import { IHero } from '../lib/interfaces';

function Hero({ children }: IHero) {
  return <div className={'flex flex-col bg-types-75 py-12 '}>{children}</div>;
}

export default Hero;
