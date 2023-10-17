import styled from '@emotion/styled';
import { Box, BoxProps } from '../box';

export const Column = styled(Box)<BoxProps>();

Column.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
};
