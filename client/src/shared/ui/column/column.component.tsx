import { Box, BoxProps } from 'shared/ui/box';
import styled from '@emotion/styled';

export const Column = styled(Box)<BoxProps>();

Column.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
};
