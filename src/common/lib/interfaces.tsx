import { HTMLInputTypeAttribute, ReactNode, SyntheticEvent } from 'react';

// export interface IBase {
//   children?: ReactNode;
//   className?: string;
// }
export type IDropdown = {
  children: ReactNode;
  list: INavItem[];
  options?: {
    caret?: boolean;
    position?: 'start' | 'center' | 'end';
    box?: boolean;
    animateCaret?: boolean;
  };
};

export declare namespace API {
  namespace Models {
    interface Cat {
      id: string;
      created_at: string;
      tags: string[];
    }
  }
}
export declare namespace Hydration {
  type ReactQueryProps = {
    refetch: () => void;
    isRefetching: boolean;
    isLoading: boolean;
    error: unknown;
  };
  interface Model<T> extends ReactQueryProps {
    data?: T;
  }
  interface Cats extends Model<API.Models.Cat[]> {}
}
export declare namespace Alert {
  interface Base {
    title?: string;
    label?: string;
    onClick?: (e: SyntheticEvent) => void;
    isLoading?: boolean;
  }
}
export interface INavItem {
  label: string;
  onClick?: () => void;
  route?: string;
  className?: string;
  icon?: string;
  list?: INavItem[]; //activates dropdown
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
  interface Base {
    layoutClass?: string;
    icon?: string;
    route?: string;
    onClick?: (e: SyntheticEvent) => void;
    title?: string;
    disabled?: boolean;
    isLoading?: boolean;
    className?: string;
  }
}
