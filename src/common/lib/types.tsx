import { ReactNode } from 'react';

export type IFormErrors = {
  [key: string]: false | string;
};

export type Navigation = {
  route?: string;
  title: string;
  icon?: ReactNode;
  toggleModal?: () => void;
};
export type Sizes = 'sm' | 'md' | 'lg' | 'xl';
