import { ReactNode } from 'react';
import { useAuthState } from '../../../../lib/store/auth';

function AuthAdmin({ children }: { children: ReactNode }) {
  const user = useAuthState((s) => s.user);
  if (user.role == 'ADMIN') {
    return <>{children}</>;
  } else return <></>;
}

export default AuthAdmin;
