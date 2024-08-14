import { render, screen } from '@testing-library/react';

import { Results } from '@/components/results/Results';
import { StoreProvider } from '@/store/StoreProvider';

import { characters } from './__mocks__/data';

describe('Results Component', () => {
  it('renders Rick and Morty', () => {
    render(
      <StoreProvider>
        <Results characters={characters} total={2} characterID="1" handleClose={jest.fn} />
      </StoreProvider>,
    );

    expect(screen.getByText('Rick')).toBeInTheDocument();
    expect(screen.getByText('Morty')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('renders characters not found', () => {
    render(<Results characters={[]} total={2} characterID="1" handleClose={jest.fn} />);

    expect(screen.getByText('Characters not found')).toBeInTheDocument();
  });
});
