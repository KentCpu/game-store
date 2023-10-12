import { Input } from 'shared/ui/input/input.component';
import React, { useState } from 'react';
import { Column } from 'shared/ui/column';
import { Button } from 'shared/ui/button';
import { Box } from 'shared/ui';
import { AppLink } from 'shared/ui/app-link/app-link.component';
import { PathsPage } from 'shared/lib/react-router';

const HomePage = () => {
  const [email, setEmail] = useState('');

  return (
    <Column flex='1 1 500px' height='700px' backgroundColor='#202020' padding='20px' zIndex={2}>
      <p>Home page</p>
      <Input label='email' required value={email} onChange={setEmail} mb='20px' />
      <Input label='password' value={email} onChange={setEmail} />
      <Box mb={4}>
        <Button variant='contained'>Вход</Button>
      </Box>
      <AppLink to={PathsPage.LOGIN} color='red' borderBottom='1px solid #fff' pb={2}>
        Home page
      </AppLink>
    </Column>
  );
};

export default HomePage;
