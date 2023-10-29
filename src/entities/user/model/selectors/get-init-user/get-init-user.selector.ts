import { StateSchema } from 'app/providers/store-provider';

export const getUserIsInit = (state: StateSchema) => state.user.isInit;
