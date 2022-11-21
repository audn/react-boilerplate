import { ReactNode } from 'react';
import { Button as IButton } from '../../lib/interfaces';
import Controller from './components/Controller';
import { Wrapper } from './components/Wrapper';
import PrimaryButton from './Primary';
import SecondaryButton from './Secondary';
import WhiteButton from './White';

export const Button = {
  Wrapper: ({ ...props }: { className?: string; children: ReactNode }) => {
    return <Wrapper {...props} />;
  },
  Primary: ({ ...props }: IButton.Base) => {
    return (
      <Controller {...props}>
        <PrimaryButton {...props} />
      </Controller>
    );
  },

  White: ({ ...props }: IButton.Base) => {
    return (
      <Controller {...props}>
        <WhiteButton {...props} />
      </Controller>
    );
  },
  Secondary: ({ ...props }: IButton.Base) => {
    return (
      <Controller {...props}>
        <SecondaryButton {...props} />
      </Controller>
    );
  },
};
