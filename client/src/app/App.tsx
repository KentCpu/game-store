import { RootProvider } from 'app/providers';
import { GlobalStyles } from './styles';

export const App = () => {
  return (
    <RootProvider>
      <GlobalStyles />
    </RootProvider>
  );
};
