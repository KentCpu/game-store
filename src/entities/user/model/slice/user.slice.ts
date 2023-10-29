import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from 'entities/user/model/types/user';
import { loginByEmail } from 'entities/user/model/service/login/login.service';
import { USER_LOCALSTORAGE_KEY } from 'shared/const';
import { registrationByEmail } from 'entities/user/model/service/registration/registration.service';

export const initialState: UserSchema = {
  isInit: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => {
      state.authData = payload;
    },
    setInitAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
      state.isInit = true;
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
        state.isInit = true;
      })
      .addCase(loginByEmail.rejected, (state) => {
        state.authData = undefined;
        state.isLoading = false;
        state.isInit = true;
      })
      .addCase(registrationByEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registrationByEmail.fulfilled, (state, action) => {
        state.authData = action.payload;
        state.isLoading = false;
        state.isInit = true;
      })
      .addCase(registrationByEmail.rejected, (state) => {
        state.authData = undefined;
        state.isLoading = false;
        state.isInit = true;
      });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
