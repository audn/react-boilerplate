import { HTMLInputTypeAttribute, ReactNode, SyntheticEvent } from 'react';

// export interface IBase {
//   children?: ReactNode;
//   className?: string;
// }
export type IDropdown = {
  children: ReactNode;
  list: INavItem[];
  options?: { caret?: boolean };
};
// export interface ILayout {
//   children: ReactNode;
//   title?: string;
//   description?: string;
// }

export interface INavItem {
  label: string;
  onClick?: () => void;
  route?: string;
  className?: string;
  icon?: string;
}
export declare namespace Form {
  interface InputBase {
    placeholder: string;
    value?: string;
    inputClassName?: string;
    error?: string;
    onChange: (value: string) => void;
  }
  interface Base {
    id: string;
    disabled?: boolean;
    description?: string | ReactNode;
    label?: string;
    regex?: (val: string) => void;
  }

  interface Toggle extends Base {
    active?: boolean;
    onClick: (val: boolean) => void;
    isLoading?: boolean;
    className?: string;
  }
  interface Textarea extends Base, InputBase {
    minLength?: number;
    maxLength?: number;
  }
  interface Label extends Base {}
  interface Input extends Base, InputBase {
    type?: HTMLInputTypeAttribute;
  }
}
export declare namespace Button {
  type Options = { size?: 'sm'; style?: 'danger' | 'warn' };
  interface Base {
    layoutClass?: string;
    icon?: string;
    route?: string;
    onClick?: (e: SyntheticEvent) => void;
    label?: string;
    options?: Options;
    disabled?: boolean;
    isLoading?: boolean;
    className?: string;
  }
}
