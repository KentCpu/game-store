import { useAppDispatch } from 'shared/lib';
import { useEffect } from 'react';
import { getUserIsInit, userActions } from 'entities/user';
import { useSelector } from 'react-redux';
import { GlobalStyles } from './styles';

export const App = () => {
  const dispatch = useAppDispatch();
  const isInit = useSelector(getUserIsInit);

  useEffect(() => {
    if (!isInit) {
      dispatch(userActions.setInitAuthData());
    }
  }, [dispatch, isInit]);

  return <GlobalStyles />;
};
