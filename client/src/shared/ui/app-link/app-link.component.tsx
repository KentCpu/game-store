import { LinkProps } from 'react-router-dom';
import { memo, ReactNode } from 'react';
import { TypographyProps, BorderProps, PaddingProps } from 'styled-system';
import { StyledLink } from 'shared/ui/app-link/app-link.styles';

interface AppLinkProps extends LinkProps, TypographyProps, BorderProps, PaddingProps {
  children?: ReactNode;
}

export const AppLink = memo(({ children, ...otherProps }: AppLinkProps) => {
  return <StyledLink {...otherProps}>{children}</StyledLink>;
});

AppLink.displayName = 'AppLink';
