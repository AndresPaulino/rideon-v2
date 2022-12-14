import {
  Home as HomePage,
  Login as LoginPage,
  Register as RegisterPage,
  NotFound as NotFoundPage,
  PasswordReset as PasswordResetPage,
  FindRideList as FindRideListPage,
} from 'pages';
const routes = [
  {
    path: '/',
    renderer: (params = {}) => <HomePage {...params} />,
  },
  {
    path: '/login',
    renderer: (params = {}) => <LoginPage {...params} />,
  },
  {
    path: '/register',
    renderer: (params = {}) => <RegisterPage {...params} />,
  },
  {
    path: '/password-reset',
    renderer: (params = {}) => <PasswordResetPage {...params} />,
  },
  {
    path: '/find-a-ride',
    renderer: (params = {}) => <FindRideListPage {...params} />,
  },
  {
    path: '*',
    renderer: (params = {}) => <NotFoundPage {...params} />,
  },
];

export default routes;
