import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, useOutletContext } from 'react-router-dom';
import { type Character } from 'rickmortyapi';

import { DetailedCard } from '@/components/detailed-card/DetailedCard';
import { useGetCharacterQuery } from '@/store/rickmortyApi';
import { store } from '@/store/store';

const character: Character = {
  id: 1,
  name: 'Rick',
  url: '',
  created: '',
  status: 'Alive',
  species: '',
  type: '',
  gender: 'Male',
  origin: {
    name: '',
    url: '',
  },
  location: {
    name: '',
    url: '',
  },
  image: '',
  episode: [],
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual<object>('react-router-dom'),
  useOutletContext: jest.fn(),
}));

jest.mock('@/store/rickmortyApi', () => ({
  ...jest.requireActual<object>('@/store/rickmortyApi'),
  useGetCharacterQuery: jest.fn(),
}));

const mockUseOutletContext = useOutletContext as jest.Mock;
const mockUseGetCharacterQuery = useGetCharacterQuery as jest.Mock;

describe('DetailedCard Component', () => {
  it('renders correctly', async () => {
    mockUseOutletContext.mockReturnValue('1');
    mockUseGetCharacterQuery.mockReturnValue({ data: character, isFetching: false, isError: false, error: undefined });

    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <DetailedCard />
        </Provider>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
