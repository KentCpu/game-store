import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'entities/user';
import { Role, USER_LOCALSTORAGE_KEY } from 'shared/const';
import { ThunkConfig } from 'app/providers/store-provider';

interface RegistrationProps {
  email: string;
  password: string;
  roles: Role[];
}

export const registrationByEmail = createAsyncThunk<User, RegistrationProps, ThunkConfig<string>>(
  'registration',
  async (authData, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.post<User>('/users', authData);

      if (!response.data) throw new Error();
      const { id, email, roles } = response.data;
      const user: User = { id, email, roles };
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
      return user;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
