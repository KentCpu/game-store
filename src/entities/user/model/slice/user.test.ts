import { describe, expect, test } from '@jest/globals';
import { DeepPartial } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { userReducer, userActions, initialState } from './user.slice';

describe('user.test', () => {
  test('should return initial state', () => {
    expect(userReducer(undefined, { type: undefined })).toEqual({});
  });

  test('should save user data to store', () => {
    const user: User = {
      id: '1',
      email: 'example@gmail.com',
    };

    const expectedUserData: DeepPartial<UserSchema> = { authData: user };
    const nextState = userReducer(initialState, userActions.setUser(user));
    expect(nextState).toEqual(expectedUserData);
  });

  test('should empty authData after logOut', () => {
    const user: User = {
      id: '1',
      email: 'example@gmail.com',
    };

    const nextStateWithAuthData = userReducer(initialState, userActions.setUser(user));
    expect(nextStateWithAuthData.authData).toEqual(user);

    const nextStateAfterLogOut = userReducer(nextStateWithAuthData, userActions.logOut());
    expect(nextStateAfterLogOut.authData).toBeUndefined();
  });
});
