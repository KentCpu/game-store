import { ReactNode } from 'react';
import { RouterProvider } from './router-provider';
import ErrorBoundary from './error-boundary.provider';
import { ThemeProvider } from './theme.provider';
import { StoreProvider } from './store-provider';

interface RootProviderProps {
  children: ReactNode;
}

export const RootProvider = ({ children }: RootProviderProps) => {
  return (
    <ErrorBoundary>
      <StoreProvider>
        <ThemeProvider>
          <RouterProvider />
          {children}
        </ThemeProvider>
      </StoreProvider>
    </ErrorBoundary>
  );
};
