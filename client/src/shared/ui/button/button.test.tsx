import { describe, expect, test } from '@jest/globals';
import { screen } from '@testing-library/react';
import { renderWithStyle } from 'shared/lib';
import { Button } from './button.component';

describe('button', () => {
  test('with children', () => {
    renderWithStyle(<Button>Login</Button>);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
