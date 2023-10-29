import { Box, Column, Input, Text } from 'shared/ui';
import { Button } from 'shared/ui/button';

import { PathsPage } from 'shared/const';
import { useTheme } from '@emotion/react';

import { AppLink } from 'shared/ui/app-link';
import { InputPassword } from 'shared/ui/input-password';
import { Title } from 'shared/ui/title';

import { getLoading } from 'entities/user';
import { useSelector } from 'react-redux';
import { useRegistration } from '../model/hooks/use-registration';
import { AuthError } from './auth-error.component';

export const RegistrationForm = () => {
  const { colors, fontSizes } = useTheme();
  const { registration, email, password, onChangeEmail, onChangePassword, errors } =
    useRegistration();
  const isLoading = useSelector(getLoading);

  return (
    <Column width='480px' borderRadius='10px' padding='55px' backgroundColor={colors.darkGray}>
      <Title
        fontWeight='700'
        color={colors.white}
        textAlign='center'
        fontSize={fontSizes.large}
        mb='16px'
      >
        Регистрация
      </Title>
      <Box mb='40px'>
        <Box mb='24px'>
          <AuthError isError={!!errors?.registrationDataInvalid}>
            {errors?.registrationDataInvalid}
          </AuthError>
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
          <Button
            size='xl'
            variant='contained'
            letterSpacing='0.5px'
            onClick={registration}
            disabled={isLoading}
            fullWidth
          >
            Зарегистрироваться
          </Button>
        </form>
      </Box>
      <Text textAlign='center' color={colors.grayLight}>
        Уже есть аккаунт?
        <AppLink
          to={PathsPage.LOGIN}
          color={colors.white}
          borderBottom={`1px solid ${colors.white}`}
          ml='4px'
        >
          Войти
        </AppLink>
      </Text>
    </Column>
  );
};
