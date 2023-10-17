import '@emotion/react';
import { Theme as ThemeTypes } from './src/shared/const';

declare module '@emotion/react' {
  export interface Theme extends ThemeTypes {}
}
