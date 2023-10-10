import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { theme } from 'shared/const';
import React from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
