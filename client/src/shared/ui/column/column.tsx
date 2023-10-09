import React from 'react';
import { Box, BoxProps } from 'shared/ui/box';

export const Column = ({ children, ...props }: BoxProps) => {
  return <Box {...props}>{children}</Box>;
};

Column.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
};
