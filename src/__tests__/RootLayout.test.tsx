import { render, screen } from '@testing-library/react';

import RootLayout from '@/app/layout';
import { Main } from '@/components/main/Main';

import { characters } from './__mocks__/data';

global.URL.createObjectURL = jest.fn();
global.URL.revokeObjectURL = jest.fn();

describe('Root layout', () => {
  const c = console;
  c.error = jest.fn();

  it('renders correctly', () => {
    render(
      <RootLayout>
        <Main charactersData={{ characters, total: 1 }} />
      </RootLayout>,
    );

    expect(screen.getByRole('button', { name: 'Theme switcher' })).toBeInTheDocument();
    expect(screen.getAllByRole('presentation')).toHaveLength(2);
  });
});
