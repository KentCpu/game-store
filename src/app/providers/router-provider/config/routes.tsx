import { RouteObject } from 'react-router-dom';
import { PathsPage, Role } from 'shared/const';
import { ForbiddenPage } from 'pages/forbidden';

import { HomePage } from 'pages/home';
import ErrorBoundary from 'app/providers/error-boundary.provider';
import { RegistrationPage } from 'pages/registration';
import { LoginPage } from 'pages/login';
import { GamePage } from 'pages/game';
import { WishlistPage } from 'pages/wishlist';
import { ProfilePage } from 'pages/profile';
import { BasketPage } from 'pages/basket';

interface Route extends Omit<RouteObject, 'path'> {
  path: PathsPage;
  roles?: Role[];
}

export const routeConfig: Route[] = [
  {
    path: PathsPage.HOME,
    element: (
      <ErrorBoundary>
        <HomePage />
      </ErrorBoundary>
    ),
    roles: [Role.VIEWER, Role.USER],
  },
  {
    path: PathsPage.REGISTRATION,
    element: (
      <ErrorBoundary>
        <RegistrationPage />
      </ErrorBoundary>
    ),
    roles: [Role.VIEWER],
  },
  {
    path: PathsPage.LOGIN,
    element: (
      <ErrorBoundary>
        <LoginPage />
      </ErrorBoundary>
    ),
    roles: [Role.VIEWER],
  },
  {
    path: PathsPage.GAME,
    element: (
      <ErrorBoundary>
        <GamePage />
      </ErrorBoundary>
    ),
    roles: [Role.VIEWER, Role.USER],
  },
  {
    path: PathsPage.WISHLIST,
    element: (
      <ErrorBoundary>
        <WishlistPage />
      </ErrorBoundary>
    ),
    roles: [Role.USER],
  },
  {
    path: PathsPage.PROFILE,
    element: (
      <ErrorBoundary>
        <ProfilePage />
      </ErrorBoundary>
    ),
    roles: [Role.USER],
  },
  {
    path: PathsPage.BASKET,
    element: (
      <ErrorBoundary>
        <BasketPage />
      </ErrorBoundary>
    ),
    roles: [Role.USER],
  },
  {
    path: PathsPage.FORBIDDEN,
    element: (
      <ErrorBoundary>
        <ForbiddenPage />
      </ErrorBoundary>
    ),
    roles: [Role.VIEWER, Role.USER],
  },
];
