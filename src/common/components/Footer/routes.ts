import { INavItem } from '../../lib/interfaces';

const pages: Array<INavItem> = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'GitHub',
    route: 'https://github.com/audn/react-boilerplate',
  },
];
const resources: Array<INavItem> = [
  {
    label: 'CodePen',
    route: '#',
  },
  {
    label: 'TailwindCSS',
    route: '#',
  },
  {
    label: 'Framer Motion',
    route: '#',
  },
];
const community: Array<INavItem> = [
  {
    label: 'Discord',
    route: '#',
  },
  {
    label: 'Twitter',
    route: '#',
  },
];
const lists = [
  {
    label: 'Pages',
    list: pages,
  },
  {
    label: 'Resources',
    list: resources,
  },
  {
    label: 'Community',
    list: community,
  },
];

export { lists };
