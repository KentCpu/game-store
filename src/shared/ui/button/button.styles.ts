import styled from '@emotion/styled';
import { typography, TypographyProps } from 'styled-system';
import { ButtonSize, ButtonVariant } from './button.component';

interface StyledButtonProps extends TypographyProps {
  size: ButtonSize;
  variant: ButtonVariant;
  fullWidth: boolean;
  disabled: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>((props) => {
  const { theme, variant, size, fullWidth, disabled, ...typographyProps } = props;

  const sizeStyled = {
    s: '32px',
    m: '38px',
    l: '40px',
    xl: '60px',
  };

  const variantStyles = {
    text: {
      background: 'none',
    },
    outline: {
      background: 'transparent',
      border: '1px solid rgba(245, 245, 245, 0.6)',
      '&:hover': {
        backgroundColor: 'rgba(56, 56, 56, 1)',
      },
    },
    contained: {
      background: theme.colors.blueDark,
      '&:hover': {
        backgroundColor: theme.colors.blueLight,
      },
    },
  };

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: fullWidth && '100%',
    height: sizeStyled[size],
    padding: '0 5px',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    borderRadius: '4px',
    color: theme.colors.white,
    fontWeight: '500',
    textTransform: 'uppercase',
    wordBreak: 'break-word',
    transition:
      'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,' +
      'border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,' +
      'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,' +
      'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    ...variantStyles[variant],
    ...typography(typographyProps),
  };
});
