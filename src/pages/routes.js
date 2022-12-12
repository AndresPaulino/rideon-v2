import { Home as HomePage } from './pages';
const routes = [
  {
    path: '/',
    renderer: (params = {}) => <HomePage {...params} />,
  },
];

export default routes;
