import { ReactNode, SyntheticEvent } from 'react';
export interface IContainer {
  children: ReactNode;
}
export interface IHero {
  children: ReactNode;
}

export interface IPostCard {
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
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
  onClick?: () => void | Promise<void>;
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
  title: string;
  description?: string;
}
export interface IForm {
  onSubmit: (event: SyntheticEvent) => void | Promise<void>;
  children: ReactNode;
}

export interface IInput {
  id?: any;
  icon?: ReactNode;
  name?: string;
  title: string;
  placeholder: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  onChange?: () => void | Promise<void>;
  value?: string;
  ref?: string;
  description?: string;
  error: string | false;
}
export interface ITextArea {
  id?: any;
  title: string;
  placeholder: string;
  helper?: any;
  required: boolean;
  description?: string;
  onChange: any;
  value?: string;
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
  desc: string;
  url?: string;
  image?: string;
}
