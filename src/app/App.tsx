import { useAppDispatch } from 'shared/lib';
import { useEffect } from 'react';
import { userActions } from 'entities/user';
import { GlobalStyles } from './styles';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.setInitAuthData());
  }, [dispatch]);

  return <GlobalStyles />;
};
