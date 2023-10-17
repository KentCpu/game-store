import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import React from 'react';
import { theme } from '../../shared/const';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
