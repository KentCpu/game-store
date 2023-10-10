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
  fontFamily: 'primary',
  fontSize: 'normal',
  lineHeight: 'normal',
  display: 'inline-flex',
};
