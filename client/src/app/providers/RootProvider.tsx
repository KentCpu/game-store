import React from 'react';
import { RouterProvider } from './RouterProvider';
import { ThemeProvider } from './ThemeProvider';

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
