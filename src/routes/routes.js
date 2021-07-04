import LayoutBasic from '../layout/LayoutBasic';
import Admin from '../pages/Admin';
import Auth from '../pages/Auth';
import Business from '../pages/Business';
import Error404 from '../pages/Error404';
import Home from '../pages/Home';

const routes = [
  {
    path: '/',
    component: Home,
    layout: LayoutBasic,
    type: 'public',
    exact: true,
  },
  {
    path: '/admin/:idBusiness',
    component: Business,
    layout: LayoutBasic,
    type: 'private',
    exact: false,
  },
  {
    path: '/admin',
    component: Admin,
    layout: LayoutBasic,
    type: 'private',
    exact: true,
  },
  {
    layout: LayoutBasic,
    type: 'public',
    component: Error404,
  },
];

export default routes;
