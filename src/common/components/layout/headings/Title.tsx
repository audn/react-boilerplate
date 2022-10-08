import { ReactNode } from 'react';
import H1 from './H1';

function Title({ children }: { children: ReactNode }) {
  return (
    <H1 className="!text-6xl !leading-[5rem] text-transparent max-w-4xl bg-gradient-to-br from-brand-primary-100 to-brand-primary-150 bg-clip-text">
      {children}
    </H1>
  );
}

export default Title;
