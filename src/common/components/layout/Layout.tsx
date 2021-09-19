import { IBaseComponent, IContainer } from '../../lib/interfaces';
import { Sizes } from '../../lib/types';
import concat from '../../utils/helpers/concat';

const getSize = (size: Sizes) => {
  switch (size) {
    case 'sm':
      return 'py-6';
    case 'md':
      return 'py-12';
    case 'lg':
      return 'py-16';
    case 'xl':
      return 'py-24';
    default:
      return 'py-10';
  }
};

const Layout = {
  Hero: ({ children, className, size }: IBaseComponent) => {
    return (
      <div className={concat(className, getSize(size!), 'flex flex-col')}>
        {children}
      </div>
    );
  },
  Container: ({ children, size, center }: IContainer) => {
    return (
      <div className={`px-6 md:px-8 w-full`}>
        <div
          className={concat(
            size ? size : 'container',
            center && 'items-center',
            'flex flex-col',
          )}
        >
          {children}
        </div>
      </div>
    );
  },
};
export default Layout;
