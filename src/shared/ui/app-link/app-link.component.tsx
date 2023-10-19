import { LinkProps } from 'react-router-dom';
import { memo, ReactNode } from 'react';
import { TypographyProps, BorderProps, SpaceProps } from 'styled-system';
import { StyledLink } from './app-link.styles';

interface AppLinkProps extends LinkProps, TypographyProps, BorderProps, SpaceProps {
  children?: ReactNode;
}

export const AppLink = memo(({ children, ...otherProps }: AppLinkProps) => {
  return <StyledLink {...otherProps}>{children}</StyledLink>;
});

AppLink.displayName = 'AppLink';
