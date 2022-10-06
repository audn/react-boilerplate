import { ReactNode } from 'react';
import { useAuthState } from '../../../../lib/store/auth';

function AuthUser({ children }: { children: ReactNode | ReactNode[] }) {
  const isLoggedIn = useAuthState((s) => s.isLoggedIn);
  if (Array.isArray(children)) {
    if (isLoggedIn) {
      return <>{children[0]}</>;
    } else return <>{children[1]}</>;
  } else {
    if (isLoggedIn) {
      return <>{children}</>;
    } else return <></>;
  }
}

export default AuthUser;
