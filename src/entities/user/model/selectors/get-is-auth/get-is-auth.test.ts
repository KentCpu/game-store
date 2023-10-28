import { describe, expect, test } from '@jest/globals';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store-provider';
import { getIsAuth } from 'entities/user';

describe('get-is-auth.selector', () => {
  test('should return false, if user is not defined', () => {
    const emptyState: DeepPartial<StateSchema> = {
      user: {},
    };

    expect(getIsAuth(emptyState as StateSchema)).toBe(false);
  });

  test('should return true, is user is defined', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
          email: 'example@gmail.com',
        },
      },
    };
    expect(getIsAuth(state as StateSchema)).toBe(true);
  });
});
