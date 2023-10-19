import React, { ReactNode } from 'react';
import { Condition } from 'shared/ui/condition';
import { Box, Text } from 'shared/ui';

interface AuthErrorProps {
  isError: boolean;
  children: ReactNode;
}

export const AuthError = ({ isError, children }: AuthErrorProps) => {
  return (
    <Condition match={isError}>
      <Box textAlign='center' backgroundColor='rgb(58, 58, 58)' padding='15px' borderRadius='4px'>
        <Text color='#E97780' lineHeight='20px'>
          {children}
        </Text>
      </Box>
    </Condition>
  );
};
