import { Colors, colors } from './colors';
import { FontFamilies, fontFamilies, FontSizes, fontSizes, LineHeights, lineHeights } from './font';

interface Theme {
  colors: Colors;
  fontFamilies: FontFamilies;
  fontSizes: FontSizes;
  lineHeights: LineHeights;
}

const theme: Theme = {
  colors,
  fontSizes,
  fontFamilies,
  lineHeights,
};

export { theme, Theme };
