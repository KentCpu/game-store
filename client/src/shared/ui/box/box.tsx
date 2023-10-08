import React from 'react';

import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  GridProps,
  grid,
} from 'styled-system';
import styled from 'styled-components';

interface BoxProps
  extends LayoutProps,
    PositionProps,
    FlexboxProps,
    GridProps,
    BorderProps,
    TypographyProps,
    ColorProps,
    SpaceProps {
  children?: React.ReactNode;
}

const StyledBox = styled.div<BoxProps>`
  ${layout}
  ${position}
  ${flexbox}
  ${grid}
  ${border}
  ${typography}
  ${color}
  ${space}
`;

export const Box = ({ children, ...props }: BoxProps) => {
  return <StyledBox {...props}>{children}</StyledBox>;
};
