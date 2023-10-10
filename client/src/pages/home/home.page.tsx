import { Input } from 'shared/ui/input/input.component';
import React, { useState } from 'react';
import { Column } from 'shared/ui/column';

const HomePage = () => {
  const [email, setEmail] = useState('');

  return (
    <Column flex='1 1 500px' height='700px' backgroundColor='#202020' padding='20px' zIndex={2}>
      <p>Home page</p>
      <Input label='email' required value={email} onChange={setEmail} mb='20px' />
      <Input label='password' value={email} onChange={setEmail} />
    </Column>
  );
};

export default HomePage;
