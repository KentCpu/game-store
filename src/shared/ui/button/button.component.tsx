import { TypographyProps } from 'styled-system';
import { ButtonHTMLAttributes, ForwardedRef, forwardRef, ReactNode } from 'react';
import { StyledButton } from './button.styles';

export type ButtonSize = 's' | 'm' | 'l' | 'xl';
export type ButtonVariant = 'text' | 'outline' | 'contained';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, TypographyProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const { children, size = 'm', variant = 'outline', fullWidth, disabled, ...otherProps } = props;
  return (
    <StyledButton
      type='button'
      size={size}
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
      ref={ref}
      {...otherProps}
    >
      {children}
    </StyledButton>
  );
});

Button.displayName = 'Button';
