import { INavItem } from '../../lib/interfaces';
const dropdown = [
  {
    label: 'My profile',
    icon: 'fa-solid fa-user',
    route: '#',
  },
  {
    label: 'Sign out',
    className: 'hover:!bg-opacity-10 hover:!bg-red-500 hover:!text-red-500',
    icon: 'fa-solid fa-sign-out-alt',
    route: '#',
  },
] as INavItem[];

const routes: Array<INavItem> = [
  {
    label: 'Github',
    route: 'https://github.com/audn/frontend-boilerplate',
    icon: 'fa-solid fa-external-link-alt',
  },
  {
    label: 'Options',
    list: dropdown,
    icon: 'fa-regular fa-angle-down',
  },
];

export { routes, dropdown };
