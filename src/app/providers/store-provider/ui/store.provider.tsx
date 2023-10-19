import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/state-schema';

interface StoreProvider {
  children?: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider = ({ initialState, children }: StoreProvider) => {
  const store = createReduxStore(initialState);
  return <Provider store={store}>{children}</Provider>;
};
