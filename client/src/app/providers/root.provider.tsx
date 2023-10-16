import React from 'react';
import { RouterProvider } from './router.provider';
import { ThemeProvider } from './theme.provider';
import { StoreProvider } from './store-provider/index';

interface RootProviderProps {
  children: React.ReactNode;
}

export const RootProvider = ({ children }: RootProviderProps) => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <RouterProvider />
        {children}
      </ThemeProvider>
    </StoreProvider>
  );
};
