import { useCallback, useState } from 'react';
import { useAppDispatch } from 'shared/lib';
import { useNavigate } from 'react-router-dom';
import { PathsPage, Role } from 'shared/const';
import { registrationByEmail } from 'entities/user/model/service/registration/registration.service';

type ErrorState = {
  email?: string | null;
  password?: string | null;
  registrationDataInvalid?: string | null;
};

type UseLoginResult = {
  email: string;
  password: string;
  errors: ErrorState;
  onChangeEmail: (value: string) => void;
  onChangePassword: (value: string) => void;
  registration: () => Promise<void>;
};

export const useRegistration = (): UseLoginResult => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<ErrorState>();

  const onChangeEmail = useCallback((value: string) => setEmail(value), [setEmail]);
  const onChangePassword = useCallback((value: string) => setPassword(value), [setPassword]);

  const validate = () => {
    const newErrors: ErrorState = {};

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

  const registration = useCallback(async () => {
    try {
      if (!validate()) return;
      const response = await dispatch(registrationByEmail({ email, password, roles: [Role.USER] }));
      if (response.meta.requestStatus === 'rejected') {
        setErrors((prevError) => ({
          ...prevError,
          registrationDataInvalid: 'Ошибка при регистрации',
        }));
      }

      if (response.meta.requestStatus === 'fulfilled') {
        navigate(PathsPage.HOME, { replace: true });
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  }, [email, password, errors]);

  return {
    email,
    password,
    registration,
    onChangeEmail,
    onChangePassword,
    errors,
  };
};
