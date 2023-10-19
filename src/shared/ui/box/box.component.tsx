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
  GridProps,
  grid,
  BoxShadowProps,
  BackgroundProps,
  system,
  TextAlignProps,
  textAlign,
} from 'styled-system';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

interface BoxSystemProps {
  boxSizing?: string;
}

export type BoxProps = FlexboxProps &
  LayoutProps &
  SpaceProps &
  BoxSystemProps &
  PositionProps &
  ColorProps &
  BorderProps &
  BoxShadowProps &
  BackgroundProps &
  GridProps &
  TextAlignProps;

export const Box = styled('div', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<BoxProps>(
  system({
    boxSizing: true,
    cursor: true,
  }),
  layout,
  position,
  flexbox,
  grid,
  border,
  color,
  space,
  grid,
  textAlign,
);

Box.defaultProps = {
  boxSizing: 'border-box',
};
