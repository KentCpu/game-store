import { Box, BoxProps } from 'shared/ui/box';
import styled from '@emotion/styled';

export const Row = styled(Box)<BoxProps>();

Row.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
  boxSizing: 'border-box',
};
