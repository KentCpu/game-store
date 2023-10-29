import { StateSchema } from 'app/providers/store-provider';
import { Role } from 'shared/const';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles ?? [Role.VIEWER];
