import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/const';

interface LoginByEmailProps {
  email: string;
  password: string;
}

export const loginByEmail = createAsyncThunk<User, LoginByEmailProps>(
  'login',
  async (authData, thunkApi) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);

      if (!response.data) throw new Error();
      const { id, email } = response.data;
      const user: User = { id, email };
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));

      return user;
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  },
);
