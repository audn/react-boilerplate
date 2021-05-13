import { ReactNode } from 'react';

export type IFormErrors = {
  [key: string]: false | string;
};
export type APIPosts = {
  posts: Array<object>;
};

export type Navigation = {
  route: string;
  title: string;
  icon?: ReactNode;
};
