import { Input } from 'shared/ui/input/input.component';
import React, { useState } from 'react';
import { Column } from 'shared/ui/column';
import { Button } from 'shared/ui/button';
import { Box } from 'shared/ui';
import { AppLink } from 'shared/ui/app-link/app-link.component';
import { PathsPage } from 'shared/lib/react-router';
import { Checkbox } from 'shared/ui/checkbox';

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [check, setIsCheck] = useState(false);

  const checkHandler = () => setIsCheck((prev) => !prev);

  return (
    <Column flex='0 1 500px' backgroundColor='#202020' height='700px' padding='20px' zIndex={2}>
      <p>Home page</p>
      <Input label='email' required value={email} onChange={setEmail} mb='20px' />
      <Input label='password' value={email} onChange={setEmail} />
      <Box mb={4}>
        <Button variant='contained'>Вход</Button>
      </Box>
      <AppLink to={PathsPage.LOGIN} color='red' borderBottom='1px solid #fff' pb={2}>
        Home page
      </AppLink>
      <Checkbox isChecked={check} onChange={checkHandler}>
        Тест
      </Checkbox>
    </Column>
  );
};

export default HomePage;
