import { jest, describe, test, expect, beforeEach } from '@jest/globals';

import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store-provider';
import axios from 'axios';
import { loginByEmail } from './login.service';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, { shallow: false });

describe('login.service', () => {
  let dispatch: jest.Mock<ThunkDispatch<StateSchema, undefined, AnyAction>>;
  let getState: jest.Mock<() => StateSchema>;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('success login', async () => {
    const userValue = { id: '1', email: 'example@gmail.com' };

    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const action = loginByEmail({
      email: 'example@gmail.com',
      password: 'qwerty',
    });
    const result = await action(dispatch, getState, { api: mockedAxios });
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = loginByEmail({
      email: 'example@gmail.com',
      password: 'qwerty',
    });
    const result = await action(dispatch, getState, { api: mockedAxios });

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
