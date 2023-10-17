import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'shared/const';

export const renderWithStyle = (component: ReactNode) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};
