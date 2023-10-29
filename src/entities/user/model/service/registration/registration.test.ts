import { beforeEach, describe, expect, jest, test } from '@jest/globals';

import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store-provider';
import axios from 'axios';
import { registrationByEmail } from 'entities/user/model/service/registration/registration.service';
import { Role } from 'shared/const';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, { shallow: false });

describe('registration.service', () => {
  let dispatch: jest.Mock<ThunkDispatch<StateSchema, undefined, AnyAction>>;
  let getState: jest.Mock<() => StateSchema>;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('success registration', async () => {
    const userValue = { id: '1', email: 'example@gmail.com' };

    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const action = registrationByEmail({
      email: 'example@gmail.com',
      password: 'qwerty',
      roles: [Role.USER],
    });
    const result = await action(dispatch, getState, { api: mockedAxios });
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
    expect(result.payload).toHaveProperty('id');
    expect(result.payload).toHaveProperty('email');
    expect(result.payload).toHaveProperty('roles');
  });

  test('error registration', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = registrationByEmail({
      email: 'example@gmail.com',
      password: 'qwerty',
      roles: [Role.USER],
    });
    const result = await action(dispatch, getState, { api: mockedAxios });

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
