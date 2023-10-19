import styled from '@emotion/styled';
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

interface AdditionalTitleProps {
  wordBreak?: string;
  whiteSpace?: string;
  textTransform?: string;
  textOverflow?: string;
  cursor?: string;
}

type TitleProps = AdditionalTitleProps & ColorProps & SpaceProps & TypographyProps & LayoutProps;

export const Title = styled.h1<TitleProps>(
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
