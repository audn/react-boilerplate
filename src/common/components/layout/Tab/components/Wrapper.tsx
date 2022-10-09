import { ReactNode } from 'react';

function TabWrapper({ children }: { children: ReactNode }) {
  return <div className="relative flex justify-center gap-2">{children}</div>;
}

export default TabWrapper;
