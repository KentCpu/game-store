import { memo, useCallback, useState } from 'react';
import { Box, Input } from 'shared/ui';
import { InputProps } from 'shared/ui/input';
import { Condition } from 'shared/ui/condition';
import { ButtonIcon, EyeClose, EyeOpen } from './input-password.styles';
import { useTogglePassword } from './use-toggle-password';

type InputPasswordProps = Omit<InputProps, 'type' | 'iconSvg'>;

export const InputPassword = memo((props: InputPasswordProps) => {
  const [isVisiblePassword, togglePassword] = useTogglePassword();
  const [focus, setFocus] = useState(false);

  const clinkOnIcon = useCallback(() => {
    setFocus(true);
    togglePassword();
  }, [setFocus]);

  const onBlur = useCallback(() => setFocus(false), [setFocus]);

  return (
    <Input
      type={isVisiblePassword ? 'text' : 'password'}
      autofocus={focus}
      onBlur={onBlur}
      iconSvg={
        <Box mr='8px'>
          <ButtonIcon size='l' variant='text' onClick={clinkOnIcon}>
            <Condition match={isVisiblePassword}>
              <EyeOpen />
            </Condition>
            <Condition match={!isVisiblePassword}>
              <EyeClose />
            </Condition>
          </ButtonIcon>
        </Box>
      }
      {...props}
    />
  );
});

InputPassword.displayName = 'InputPassword';
