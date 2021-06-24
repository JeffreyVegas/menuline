import LayoutBasic from '../layout/LayoutBasic';
import Auth from '../pages/Auth';
import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import Negocio from '../pages/Negocio';

const routes = [
  {
    path: '/',
    component: Home,
    layout: LayoutBasic,
    exact: true,
  },
  {
    path: '/auth',
    component: Auth,
    layout: LayoutBasic,
    exact: true,
  },
  {
    path: '/:username',
    component: Negocio,
    layout: LayoutBasic,
    exact: true,
  },
  {
    layout: LayoutBasic,
    component: Error404,
  },
];

export default routes;
