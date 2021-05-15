import { ReactNode } from 'react';
import { IPost } from './interfaces';

export type IFormErrors = {
  [key: string]: false | string;
};

export type APIPosts = {
  posts: IPost[];
};

export type Navigation = {
  route: string;
  title: string;
  icon?: ReactNode;
};
