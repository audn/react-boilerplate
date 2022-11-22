import { ReactNode, SyntheticEvent } from 'react';
import { Form as IForm } from '../../lib/interfaces';
import FormWrapper from './components/FormWrapper';
import Input from './Input';
import Layout from './Layout';
import Textarea from './Textarea';
import Toggle from './Toggle';

export const Form = {
  Layout: ({
    ...props
  }: {
    onSubmit: (event: SyntheticEvent) => void;
    className?: string;
    children: ReactNode;
  }) => {
    return <Layout {...props} />;
  },
  Wrapper: ({ ...props }: { className?: string; children: ReactNode }) => {
    return <FormWrapper {...props} />;
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
