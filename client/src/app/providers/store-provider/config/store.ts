import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/store-provider/config/state-schema';

export function createReduxStore(initialState: StateSchema) {
  return configureStore({
    reducer: {},
    devTools: true,
    preloadedState: initialState,
  });
}
