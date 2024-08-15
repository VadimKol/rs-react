import { createRemixStub } from '@remix-run/testing';
import { render, screen } from '@testing-library/react';
import { type ReactNode } from 'react';

import { Layout } from '@/app/root';
import { Main } from '@/components/main/Main';

import { characters } from './mocks/data';

global.URL.createObjectURL = vi.fn();
global.URL.revokeObjectURL = vi.fn();

describe('Root layout', () => {
  const c = console;
  c.error = vi.fn();

  it('renders correctly', () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: (): ReactNode => (
          <Layout>
            <Main charactersData={{ characters, total: 1 }} />
          </Layout>
        ),
      },
    ]);

    render(<RemixStub />);

    expect(screen.getByRole('button', { name: 'Theme switcher' })).toBeInTheDocument();
    expect(screen.getAllByRole('presentation')).toHaveLength(2);
  });
});
