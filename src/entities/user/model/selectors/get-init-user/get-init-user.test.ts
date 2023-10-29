import { describe, expect, test } from '@jest/globals';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store-provider';
import { getUserIsInit } from 'entities/user';

describe('get-init-user.selector', () => {
  test('should return false, if user is not defined', () => {
    const emptyState: DeepPartial<StateSchema> = {
      user: {
        isInit: false,
      },
    };

    expect(getUserIsInit(emptyState as StateSchema)).toBe(false);
  });

  test('should return true, is user is defined', () => {
    const emptyState: DeepPartial<StateSchema> = {
      user: {
        isInit: true,
      },
    };

    expect(getUserIsInit(emptyState as StateSchema)).toBe(true);
  });
});
