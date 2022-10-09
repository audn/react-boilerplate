import { ReactNode } from 'react';

function TabWrapper({ children }: { children: ReactNode }) {
  return <div className="relative flex justify-center group">{children}</div>;
}

export default TabWrapper;
