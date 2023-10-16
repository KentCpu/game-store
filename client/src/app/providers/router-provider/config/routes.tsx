import { ReactNode } from 'react';
import { HomePage } from 'pages/home';
import { RegistrationPage } from 'pages/registration';
import { LoginPage } from 'pages/login';
import { WishlistPage } from 'pages/wishlist';
import { GamePage } from 'pages/game';
import { BasketPage } from 'pages/basket';
import { ProfilePage } from 'pages/profile';
import ErrorBoundary from 'app/providers/error-boundary.provider';
import { PathsPage } from 'shared/const';

type ViewerRoutesPaths = PathsPage.HOME | PathsPage.LOGIN | PathsPage.REGISTRATION | PathsPage.GAME;

interface ViewerRoute {
  path: ViewerRoutesPaths;
  element: ReactNode;
}

const viewerRoutes: ViewerRoute[] = [
  {
    path: PathsPage.HOME,
    element: (
      <ErrorBoundary>
        <HomePage />
      </ErrorBoundary>
    ),
  },
  {
    path: PathsPage.REGISTRATION,
    element: (
      <ErrorBoundary>
        <RegistrationPage />
      </ErrorBoundary>
    ),
  },
  {
    path: PathsPage.LOGIN,
    element: (
      <ErrorBoundary>
        <LoginPage />
      </ErrorBoundary>
    ),
  },
  {
    path: PathsPage.GAME,
    element: (
      <ErrorBoundary>
        <GamePage />
      </ErrorBoundary>
    ),
  },
];

type UserRoutesPaths =
  | PathsPage.HOME
  | PathsPage.GAME
  | PathsPage.BASKET
  | PathsPage.WISHLIST
  | PathsPage.PROFILE;

interface UserRoute {
  path: UserRoutesPaths;
  element: ReactNode;
}

const userRoutes: UserRoute[] = [
  {
    path: PathsPage.HOME,
    element: (
      <ErrorBoundary>
        <HomePage />
      </ErrorBoundary>
    ),
  },
  {
    path: PathsPage.GAME,
    element: (
      <ErrorBoundary>
        <GamePage />
      </ErrorBoundary>
    ),
  },
  {
    path: PathsPage.BASKET,
    element: (
      <ErrorBoundary>
        <BasketPage />
      </ErrorBoundary>
    ),
  },
  {
    path: PathsPage.GAME,
    element: (
      <ErrorBoundary>
        <GamePage />
      </ErrorBoundary>
    ),
  },
  {
    path: PathsPage.WISHLIST,
    element: (
      <ErrorBoundary>
        <WishlistPage />
      </ErrorBoundary>
    ),
  },
  {
    path: PathsPage.PROFILE,
    element: (
      <ErrorBoundary>
        <ProfilePage />
      </ErrorBoundary>
    ),
  },
];

export { viewerRoutes, userRoutes };
