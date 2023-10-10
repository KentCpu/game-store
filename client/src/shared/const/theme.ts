import { Colors, colors } from 'shared/const/colors';
import {
  FontFamilies,
  fontFamilies,
  FontSizes,
  fontSizes,
  LineHeights,
  lineHeights,
} from 'shared/const/font';

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
