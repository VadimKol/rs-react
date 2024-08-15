import { createRemixStub } from '@remix-run/testing';
import { render, screen } from '@testing-library/react';
import { type ReactNode } from 'react';
import { Provider } from 'react-redux';

import { Results } from '@/components/results/Results';
import { store } from '@/store/store';

import { characters } from './mocks/data';

describe('Results Component', () => {
  it('renders Rick and Morty', () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: (): ReactNode => (
          <Provider store={store}>
            <Results characters={characters} total={2} characterID="1" handleClose={vi.fn()} />
          </Provider>
        ),
      },
    ]);

    render(<RemixStub />);

    expect(screen.getByText('Rick')).toBeInTheDocument();
    expect(screen.getByText('Morty')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('renders characters not found', () => {
    render(<Results characters={[]} total={2} characterID="1" handleClose={vi.fn()} />);

    expect(screen.getByText('Characters not found')).toBeInTheDocument();
  });
});
