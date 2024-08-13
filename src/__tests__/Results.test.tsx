import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';

import { Results } from '@/components/results/Results';
import { makeStore } from '@/store/store';

import { characters } from './__mocks__/data';

const store = makeStore();

describe('Results Component', () => {
  it('renders Rick and Morty', async () => {
    render(
      <Provider store={store}>
        <Results characters={characters} total={2} characterID="1" handleClose={jest.fn} />
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText('Rick')).toBeInTheDocument();
      expect(screen.getByText('Morty')).toBeInTheDocument();
      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText('2')).toBeInTheDocument();
    });
  });

  it('renders characters not found', () => {
    render(<Results characters={[]} total={2} characterID="1" handleClose={jest.fn} />);

    expect(screen.getByText('Characters not found')).toBeInTheDocument();
  });
});
