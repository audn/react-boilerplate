import { Navigation } from '../../lib/types';

const routes: Array<Navigation> = [
  {
    title: 'Home',
    route: '/',
  },
  {
    title: 'Feedback',
    route: '/forms',
  },
  {
    title: 'Modals',
    route: '/modals',
  },
  {
    title: 'Github',
    route: 'https://github.com/audn/frontend-boilerplate',
    icon: 'far fa-external-link',
  },
];

export default routes;
