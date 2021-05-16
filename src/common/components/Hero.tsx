import React from 'react';
import { IHero } from '../lib/interfaces';

function Hero({ children }: IHero) {
  return <div className={'flex flex-col bg-hero-100 py-12 '}>{children}</div>;
}

export default Hero;
