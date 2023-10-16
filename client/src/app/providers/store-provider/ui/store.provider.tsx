import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';

interface StoreProvider {
  children?: ReactNode;
  initialState?: unknown;
}

export const StoreProvider = ({ initialState, children }: StoreProvider) => {
  const store = createReduxStore(initialState);
  return <Provider store={store}>{children}</Provider>;
};
