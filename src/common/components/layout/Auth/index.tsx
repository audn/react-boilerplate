import { ReactNode } from 'react';
import AuthAdmin from './Admin';
import AuthUser from './User';

type Props = {
  children: ReactNode;
};
const Auth = {
  Admin: ({ ...props }: Props) => {
    return <AuthAdmin {...props} />;
  },
  User: ({ ...props }: Props) => {
    return <AuthUser {...props} />;
  },
};

export default Auth;
