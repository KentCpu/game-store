import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './state-schema';

export function createReduxStore(initialState: StateSchema) {
  return configureStore({
    reducer: {},
    devTools: true,
    preloadedState: initialState,
  });
}
