import { ReactNode } from 'react';
import { Sizes } from './types';

export interface ILayout extends ISeoTags {
  children: ReactNode;
}

export interface ISeoTags {
  title: string;
  defaultTitle?: string;
  desc?: string;
  url?: string;
  image?: string;
}

export interface IContainer {
  children: ReactNode;
  size?: 'md';
  center?: boolean;
}

export interface IBaseComponent {
  children?: ReactNode;
  className?: string;
  size?: Sizes;
}

export interface IModal {
  title?: string | ReactNode;
  open: boolean;
  children: ReactNode;
  className?: string;
  onClose: () => void;
}

export interface IButton {
  size?: Sizes;
  title: string;
  route?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: string[];
  className?: string;
}
