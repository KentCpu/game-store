import { ReactNode } from 'react';
import { Row } from 'shared/ui';

interface AuthContainerProps {
  children: ReactNode;
}

export const AuthContainer = ({ children }: AuthContainerProps) => {
  return (
    <Row
      position='fixed'
      top='0'
      left='0'
      width='100%'
      height='100%'
      justifyContent='center'
      alignItems='center'
      alignContent='center'
      overflow='auto'
    >
      {children}
    </Row>
  );
};
