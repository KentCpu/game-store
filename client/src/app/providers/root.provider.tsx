import React from 'react';
import { RouterProvider } from './router.provider';
import { ThemeProvider } from './theme.provider';

interface RootProviderProps {
  children: React.ReactNode;
}

export const RootProvider = ({ children }: RootProviderProps) => {
  return (
    <ThemeProvider>
      <RouterProvider />
      {children}
    </ThemeProvider>
  );
};
