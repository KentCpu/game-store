import {
  createBrowserRouter,
  RouteObject,
  RouterProvider as RouterDomProvider,
} from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'app/providers/router-provider/config/routes';
import { PrivateRouter } from 'app/providers/router-provider/ui/private-router.component';

export const RouterProvider = () => {
  const routes = routeConfig.map((route) => ({
    ...route,
    element: <PrivateRouter roles={route.roles}>{route.element}</PrivateRouter>,
  }));
  const router = createBrowserRouter(routes as RouteObject[]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterDomProvider router={router} />
    </Suspense>
  );
};
