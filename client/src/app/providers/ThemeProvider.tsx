import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { theme } from 'shared/const';
import React from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ThemeProviderStyled theme={theme}>{children}</ThemeProviderStyled>;
};
