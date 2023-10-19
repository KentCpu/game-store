import { useCallback, useState } from 'react';

import { useAppDispatch } from 'shared/lib';
import { loginByEmail } from 'entities/user';

type ErrorState = {
  email: string | null;
  password: string | null;
  loginDataInvalid: string | null;
};

type UseLoginResult = {
  email: string;
  password: string;
  errors: ErrorState;
  onChangeEmail: (value: string) => void;
  onChangePassword: (value: string) => void;
  login: () => Promise<void>;
};

export const useLogin = (): UseLoginResult => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<ErrorState>();

  const onChangeEmail = useCallback((value: string) => setEmail(value), [setEmail]);
  const onChangePassword = useCallback((value: string) => setPassword(value), [setPassword]);

  const validate = () => {
    const newErrors: ErrorState = { email: null, password: null, loginDataInvalid: null };

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email) newErrors.email = 'Обязательное поле';
    else if (!email.match(emailRegex)) newErrors.email = 'Некорректный e-mail';

    if (!password) newErrors.password = 'Обязательное поле';
    else if (password.length < 5)
      newErrors.password = 'Пароль должен состоять минимум из 5 символов';

    setErrors(newErrors);

    const isValid = !Object.entries(newErrors).some(([, value]) => value);

    return isValid;
  };

  const login = useCallback(async () => {
    try {
      if (!validate()) return;

      const response = await dispatch(loginByEmail({ email, password }));
      if (response.meta.requestStatus === 'rejected') {
        setErrors((prevError) => ({
          ...prevError,
          loginDataInvalid: 'Неправильный e-mail или пароль',
        }));
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }, [email, password]);

  return {
    email,
    password,
    login,
    onChangeEmail,
    onChangePassword,
    errors,
  };
};
