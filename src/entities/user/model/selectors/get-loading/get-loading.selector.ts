import { StateSchema } from 'app/providers/store-provider';

export const getLoading = (state: StateSchema) => state?.user?.isLoading || false;
