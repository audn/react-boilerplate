import { ReactNode } from 'react';

function Hero({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-12 text-center md:mt-0 md:py-24 rounded-2xl md:bg-types-100">
      {children}
    </div>
  );
}

export default Hero;
