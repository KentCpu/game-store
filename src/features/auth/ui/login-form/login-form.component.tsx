import { Box, Column, Input, Text } from 'shared/ui';
import { Button } from 'shared/ui/button';

import { PathsPage } from 'shared/const';
import { useTheme } from '@emotion/react';

import { AppLink } from 'shared/ui/app-link';
import { InputPassword } from 'shared/ui/input-password';
import { getUser } from 'entities/user';

import { useSelector } from 'react-redux';
import { AuthError } from 'features/auth/ui/error-message/auth-error.component';
import { useLogin } from '../../model/hooks/use-login';
import { LoginFormTitle } from './login-form.styles';

export const LoginForm = () => {
  const { colors } = useTheme();
  const { login, email, password, onChangeEmail, onChangePassword, errors } = useLogin();
  const { isLoading } = useSelector(getUser);

  return (
    <Column width='480px' borderRadius='10px' padding='55px' backgroundColor={colors.darkGray}>
      <Box mb='28px'>
        <LoginFormTitle>Вход</LoginFormTitle>
      </Box>
      <Box mb='40px'>
        <Box mb='24px'>
          <AuthError isError={!!errors?.loginDataInvalid}>{errors?.loginDataInvalid}</AuthError>
        </Box>
        <form>
          <Input
            label='Электронная почта'
            value={email}
            onChange={onChangeEmail}
            errorMessage={errors?.email}
            mb='24px'
            required
          />
          <InputPassword
            label='Пароль'
            value={password}
            onChange={onChangePassword}
            errorMessage={errors?.password}
            mb='32px'
            required
          />
          <Button size='xl' variant='contained' onClick={login} disabled={isLoading} fullWidth>
            Вход
          </Button>
        </form>
      </Box>
      <Box textAlign='center'>
        <Text color={colors.grayLight}>
          Еще нет аккаунта?
          <AppLink
            to={PathsPage.REGISTRATION}
            color={colors.white}
            borderBottom={`1px solid ${colors.white}`}
            ml='4px'
          >
            Зарегистрироваться
          </AppLink>
        </Text>
      </Box>
    </Column>
  );
};
