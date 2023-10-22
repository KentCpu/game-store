import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/providers/store-provider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoading } from './get-loading.selector';

describe('get-loading.test', () => {
  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        isLoading: true,
      },
    };

    expect(getLoading(state as StateSchema)).toBe(true);
  });

  test('should return default value if state is empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoading(state as StateSchema)).toBe(false);
  });
});
