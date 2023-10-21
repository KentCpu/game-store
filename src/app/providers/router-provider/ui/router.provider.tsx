import { createBrowserRouter, RouterProvider as RouterDomProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { userRoutes, viewerRoutes } from '../config/routes';

export const RouterProvider = () => {
  const isAuth = false;
  const routes = isAuth ? userRoutes : viewerRoutes;
  const router = createBrowserRouter(routes);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterDomProvider router={router} />
    </Suspense>
  );
};
