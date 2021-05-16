import { ReactNode, SyntheticEvent } from 'react';
export interface IModal {
  open: boolean;
  onClose?: () => void | Promise<void>;
  children: ReactNode;
  className?: string;
}
export interface IAlert {
  open: boolean;
  title: string;
  message?: string;
  footer?: string;
  onClose?: () => void | Promise<void>;
}
export interface IBanner {
  open: boolean;
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
export interface ICategory {
  name: string;
  href: string;
}
export interface IAuthor {
  name: string;
  href: string;
  imageUrl: string;
}
export interface IPost {
  title: string;
  href: string;
  category: ICategory;
  description: string;
  date: string;
  datetime: string;
  imageUrl: string;
  readingTime: string;
  author: IAuthor;
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
  colorScheme: 'naked';
  title: string;
  description?: string;
  id?: any;
}
export interface IForm {
  onSubmit: (event: SyntheticEvent) => void | Promise<void>;
  children: ReactNode;
  hasSubmitted: boolean;
}
export interface IInput {
  colorScheme: 'naked';
  id: string;
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
  colorScheme: 'naked';
  id: string;
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
  colorScheme: 'naked';
  className?: string;
  id: string;
  title: string;
  required: boolean | false;
  onChange: (event: SyntheticEvent) => void | Promise<void>;
  checked: boolean;
  error: false | string;
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
