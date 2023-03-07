const HOME = 'Home';

export const routes = [
  {
    index: true,
    label: HOME,
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Stats',
    path: '/stats',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export const routesBr = [
  {
    index: true,
    label: 'Início',
    path: '/',
  },
  {
    label: 'Sobre',
    path: '/about',
  },
  {
    label: 'Experiência',
    path: '/resume',
  },
  {
    label: 'Projetos',
    path: '/projects',
  },
  {
    label: 'Estatísticas',
    path: '/stats',
  },
  {
    label: 'Contato',
    path: '/contact',
  },
];

export default { routes, routesBr };
