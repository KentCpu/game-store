import {
  color,
  ColorProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps,
} from 'styled-system';
import styled from '@emotion/styled';
import { theme } from '../../const';

interface TextProps extends ColorProps, SpaceProps, TypographyProps, LayoutProps {
  wordBreak?: string;
  whiteSpace?: string;
  textTransform?: string;
  textOverflow?: string;
  cursor?: string;
}

export const Text = styled.span<TextProps>(
  system({
    wordBreak: true,
    textTransform: true,
    whiteSpace: true,
    textOverflow: true,
    cursor: true,
  }),
  color,
  space,
  typography,
  layout,
);

Text.defaultProps = {
  fontWeight: 'normal',
  fontSize: theme.fontSizes.extra,
  lineHeight: 'normal',
};
