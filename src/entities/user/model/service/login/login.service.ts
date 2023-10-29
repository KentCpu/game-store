import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'entities/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/const';
import { ThunkConfig } from 'app/providers/store-provider';

interface LoginByEmailProps {
  email: string;
  password: string;
}

export const loginByEmail = createAsyncThunk<User, LoginByEmailProps, ThunkConfig<string>>(
  'login',
  async (authData, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.post<User>('/login', authData);

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
