import React from 'react';
import { Box, BoxProps } from 'shared/ui/box';

export const Row = ({ children, ...props }: BoxProps) => {
  return <Box {...props}>{children}</Box>;
};

Row.defaultProps = {
  display: 'flex',
  flexDirection: 'row',
};
