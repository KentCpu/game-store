interface FontSizes {
  semiTiny: number;
  tiny: number;
  normal: number;
  regular: number;
  extra: number;
  medium: number;
  increased: number;
  large: number;
  huge: number;
}

interface FontFamilies {
  primary: string;
  secondary: string;
}

interface LineHeights {
  micro: number;
  extra: number;
  small: number;
  medium: number;
  primary: number;
}

const fontSizes: FontSizes = {
  semiTiny: 8,
  tiny: 10,
  normal: 12,
  regular: 14,
  extra: 16,
  medium: 18,
  increased: 20,
  large: 26,
  huge: 32,
};

const fontFamilies: FontFamilies = {
  primary: 'Inter',
  secondary: 'Open Sans',
};

const lineHeights: LineHeights = {
  micro: 1.1,
  extra: 1.4,
  small: 1.5,
  medium: 1.6,
  primary: 1.75,
};

export { fontSizes, fontFamilies, lineHeights, FontSizes, FontFamilies, LineHeights };
