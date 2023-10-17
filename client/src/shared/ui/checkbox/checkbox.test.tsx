import { describe, expect, test } from '@jest/globals';
import { screen } from '@testing-library/react';
import { Checkbox } from 'shared/ui/checkbox/checkbox.component';
import { renderWithStyle } from 'shared/lib';

describe('button', () => {
  test('with children', () => {
    renderWithStyle(<Checkbox>Remember me</Checkbox>);
    expect(screen.getByText('Remember me')).toBeInTheDocument();
  });
});
