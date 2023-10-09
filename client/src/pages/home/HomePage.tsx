import { Input } from 'shared/ui/input/Input';
import React, { useState } from 'react';
import { Box } from 'shared/ui/box';

const HomePage = () => {
  const [email, setEmail] = useState('');

  return (
    <Box width='500px' height='700px' backgroundColor='#202020' padding='20px'>
      <p>Home page</p>
      <Input label='email' required value={email} onChange={setEmail} mb='20px' />
      <Input label='password' value={email} onChange={setEmail} />
    </Box>
  );
};

export default HomePage;
