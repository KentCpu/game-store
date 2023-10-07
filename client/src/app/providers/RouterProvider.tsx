import { createBrowserRouter, RouterProvider as RouterDomProvider } from 'react-router-dom';
import { userRoutes, viewerRoutes } from 'shared/lib/react-router';

export const RouterProvider = () => {
  const isAuth = false;
  const routes = isAuth ? userRoutes : viewerRoutes;
  const router = createBrowserRouter(routes);

  return <RouterDomProvider router={router} />;
};
