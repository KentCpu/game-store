import { StateSchema } from 'app/providers/store-provider';

export const getIsAuth = (state: StateSchema) => state.user.authData !== undefined;
