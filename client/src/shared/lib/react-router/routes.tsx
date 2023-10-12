import { ReactNode } from 'react';
import { HomePage } from 'pages/home';
import { RegistrationPage } from 'pages/registration';
import { LoginPage } from 'pages/login';
import { WishlistPage } from 'pages/wishlist';
import { GamePage } from 'pages/game';
import { BasketPage } from 'pages/basket';
import { ProfilePage } from 'pages/profile';

export enum PathsPage {
  HOME = '/',
  LOGIN = '/login',
  REGISTRATION = '/registration',
  GAME = '/game',
  BASKET = '/basket',
  WISHLIST = '/wishlist',
  PROFILE = '/profile',
}

type ViewerRoutesPaths = PathsPage.HOME | PathsPage.LOGIN | PathsPage.REGISTRATION | PathsPage.GAME;

interface ViewerRoute {
  path: ViewerRoutesPaths;
  element: ReactNode;
}

const viewerRoutes: ViewerRoute[] = [
  {
    path: PathsPage.HOME,
    element: <HomePage />,
  },
  {
    path: PathsPage.REGISTRATION,
    element: <RegistrationPage />,
  },
  {
    path: PathsPage.LOGIN,
    element: <LoginPage />,
  },
  {
    path: PathsPage.GAME,
    element: <GamePage />,
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
    element: <HomePage />,
  },
  {
    path: PathsPage.GAME,
    element: <GamePage />,
  },
  {
    path: PathsPage.BASKET,
    element: <BasketPage />,
  },
  {
    path: PathsPage.GAME,
    element: <GamePage />,
  },
  {
    path: PathsPage.WISHLIST,
    element: <WishlistPage />,
  },
  {
    path: PathsPage.PROFILE,
    element: <ProfilePage />,
  },
];

export { viewerRoutes, userRoutes };
