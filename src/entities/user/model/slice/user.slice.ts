import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema } from 'entities/user/model/types/user';
import { loginByEmail } from 'entities/user/model/service/login.service';
import { USER_LOCALSTORAGE_KEY } from 'shared/const';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<UserSchema>) => {
      state.authData = payload.authData;
    },
    setInitAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
    logOut: (state) => {
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
      state.authData = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginByEmail.fulfilled, (state, action) => {
        state.authData = action.payload;
        state.isLoading = false;
      })
      .addCase(loginByEmail.rejected, (state) => {
        state.authData = undefined;
        state.isLoading = false;
      });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
