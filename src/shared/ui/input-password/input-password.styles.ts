import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { theme } from 'shared/const';
import { Button } from 'shared/ui/button';
import PasswordOpenIcon from '../../assets/icons/password-open.svg';
import PasswordCloseIcon from '../../assets/icons/password-close.svg';

const iconBaseStyle = {
  display: 'inline-block',
  width: '24px',
  height: '24px',
  fill: theme.colors.white,
};

export const ButtonIcon = styled(Button)({
  padding: '8px',
  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    borderRadius: '4px',
    transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  },
});

export const EyeOpen = styled(PasswordOpenIcon, {
  shouldForwardProp: (prop) => isPropValid(prop),
})(iconBaseStyle);

export const EyeClose = styled(PasswordCloseIcon, {
  shouldForwardProp: (prop) => isPropValid(prop),
})(iconBaseStyle);
