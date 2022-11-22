import { ReactNode, SyntheticEvent } from 'react';

type Props = {
  onSubmit: (event: SyntheticEvent) => void;
  children: ReactNode;
  className?: string;
};
function Layout({ onSubmit, children, className }: Props) {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
}

export default Layout;
