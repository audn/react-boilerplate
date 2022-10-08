import { ReactNode } from 'react';

function Hero({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 mx-auto text-center rounded-2xl bg-types-100">
      {children}
    </div>
  );
}

export default Hero;
