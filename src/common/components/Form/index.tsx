import { ReactNode } from 'react';
import { Form as IForm } from '../../lib/interfaces';
import { Wrapper } from './components';
import Input from './Input';
import Textarea from './Textarea';
import Toggle from './Toggle';

export const Form = {
  Wrapper: ({ ...props }: { className?: string; children: ReactNode }) => {
    return <Wrapper {...props} />;
  },
  Textarea: ({ ...props }: IForm.Textarea) => {
    return <Textarea {...props} />;
  },

  Toggle: ({ ...props }: IForm.Toggle) => {
    return <Toggle {...props} />;
  },
  Input: ({ ...props }: IForm.Input) => {
    return <Input {...props} />;
  },
};
