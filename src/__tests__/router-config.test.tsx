import { render, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { type Character } from 'rickmortyapi';

import { router } from '@/router/router-config';
import { useGetCharacterQuery, useGetCharactersQuery } from '@/store/rickmortyApi';
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
global.URL.createObjectURL = jest.fn();
global.URL.revokeObjectURL = jest.fn();

global.URLSearchParams = jest.fn().mockImplementation(() => ({
  get: jest.fn(() => 'mockedValue'),
}));

let mockSearchParam = new URLSearchParams('');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual<object>('react-router-dom'),
  useSearchParams: (): [URLSearchParams, (newParams: URLSearchParams) => void] => {
    const [params, setParams] = useState(mockSearchParam);
    return [
      params,
      (newParams: URLSearchParams): void => {
        mockSearchParam = newParams;
        setParams(newParams);
      },
    ];
  },
}));

jest.mock('@/store/rickmortyApi', () => ({
  ...jest.requireActual<object>('@/store/rickmortyApi'),
  useGetCharactersQuery: jest.fn(),
  useGetCharacterQuery: jest.fn(),
}));

const mockUseGetCharactersQuery = useGetCharactersQuery as jest.Mock;
const mockUseGetCharacterQuery = useGetCharacterQuery as jest.Mock;

describe('router-config', () => {
  it('renders correctly', async () => {
    mockUseGetCharacterQuery.mockReturnValue({ data: character, isFetching: false, isError: false, error: undefined });
    mockUseGetCharactersQuery.mockReturnValue({
      data: { characters: [], totalPages: 0 },
      isFetching: false,
      isError: false,
      error: undefined,
    });
    const { container } = render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>,
    );

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
