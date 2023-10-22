import { describe, test, expect } from '@jest/globals';
import { AsyncThunkTest } from 'shared/lib';
import { userActions } from '../slice/user.slice';
import { loginByEmail } from './login.service';

describe('login.service', () => {
  test('success login', async () => {
    const userValue = { id: '1', email: 'example@gmail.com' };

    const thunk = new AsyncThunkTest(loginByEmail);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
    const result = await thunk.callThunk({
      email: 'example@gmail.com',
      password: 'qwerty',
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUser(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('error login', async () => {
    const thunk = new AsyncThunkTest(loginByEmail);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({
      email: 'example@gmail.com',
      password: 'qwerty',
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
