import { Box, Input } from 'shared/ui';
import { InputProps } from 'shared/ui/input';
import { Condition } from 'shared/ui/condition';
import { ButtonIcon, EyeClose, EyeOpen } from './input-password.styles';
import { useTogglePassword } from './use-toggle-password';

type InputPasswordProps = Omit<InputProps, 'type' | 'iconSvg'>;

export const InputPassword = (props: InputPasswordProps) => {
  const [isVisiblePassword, togglePassword] = useTogglePassword();

  return (
    <Input
      type={isVisiblePassword ? 'text' : 'password'}
      iconSvg={
        <Box mr='8px'>
          <ButtonIcon size='l' variant='text' onClick={togglePassword}>
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
};
