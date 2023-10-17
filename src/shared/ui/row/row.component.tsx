import styled from '@emotion/styled';
import { Box, BoxProps } from '../box';

export const Row = styled(Box)<BoxProps>();

Row.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  boxSizing: 'border-box',
};
