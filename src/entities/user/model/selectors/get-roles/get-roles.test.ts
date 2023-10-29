import { describe, expect, test } from '@jest/globals';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store-provider';
import { getUserRoles } from 'entities/user/model/selectors/get-roles/get-roles.selector';
import { Role } from 'shared/const';

describe('get-init-user.selector', () => {
  test('should return viewer role, if roles is not defined', () => {
    const emptyState: DeepPartial<StateSchema> = {
      user: {},
    };

    expect(getUserRoles(emptyState as StateSchema)).toEqual([Role.VIEWER]);
  });

  test('should return role, if role is defined', () => {
    const emptyState: DeepPartial<StateSchema> = {
      user: {
        authData: {
          roles: [Role.User],
        },
      },
    };

    expect(getUserRoles(emptyState as StateSchema)).toEqual([Role.User]);
  });
});
