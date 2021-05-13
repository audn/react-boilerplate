import { ReactNode, SyntheticEvent } from 'react';

export interface IBanner {
  type?: 'info' | 'brand';
  position?: 'bottom';
  leftContent: ReactNode;
  rightContent?: ReactNode;
  icon?: ReactNode;
  onClose?: () => void | Promise<void>;
}
export interface IContainer {
  children: ReactNode;
  alignContent?: 'center' | 'left' | 'right';
}
export interface IHero {
  children: ReactNode;
}
export interface IPostCard {
  title: string;
  abstract: string;
  created_date: string;
  multimedia: [{ url: string; type: string }];
}
export interface IPost {
  title: string;
  description: string;
  urlToImage: string;
  author: string;
  publishedAt: string;
}
export interface IButtonGroup {
  className?: string;
  children: ReactNode;
}
export interface IButton {
  onClick?: (param?: SyntheticEvent | any) => void | Promise<void>;
  children?: ReactNode;
  route?: string;
  title: string;
  disabled?: boolean;
  className?: string;
  type?: string;
  icon?: ReactNode;
  size?: string;
}

export interface IFormGroup {
  className?: string;
  children: ReactNode;
}
export interface IFormLabel {
  colorScheme: 'hero' | 'naked';
  title: string;
  description?: string;
}
export interface IForm {
  onSubmit: (event: SyntheticEvent) => void | Promise<void>;
  children: ReactNode;
  hasSubmitted: boolean;
}

export interface IInput {
  colorScheme: 'hero' | 'naked';
  id?: any;
  icon?: ReactNode;
  name?: string;
  title: string;
  placeholder: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  type?: string;
  onChange?: (event: SyntheticEvent) => void | Promise<void>;
  value?: string;
  ref?: string;
  description?: string;
  error: string | false;
}
export interface ITextArea {
  colorScheme: 'hero' | 'naked';
  id?: any;
  title: string;
  placeholder: string;
  helper?: any;
  required: boolean;
  description?: string;
  onChange?: (event: SyntheticEvent) => void | Promise<void>;
  value?: string;
  className?: string;
  maxLength: number;
  error: false | string;
}
export interface ICheckbox {
  id: string;
  title: string;
  required: boolean;
}
export interface ILayout extends ISeoTags {
  children: ReactNode;
}
export interface ISeoTags {
  title: string;
  desc?: string;
  url?: string;
  image?: string;
}
