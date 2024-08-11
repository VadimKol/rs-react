/* import { render, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { Main } from '@/components/main/Main';
import { useGetCharactersQuery } from '@/store/rickmortyApi';
import { store } from '@/store/store';

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
}));

const mockUseGetCharactersQuery = useGetCharactersQuery as jest.Mock;

describe('Main Component', () => {
  it('renders correctly', async () => {
    mockUseGetCharactersQuery.mockReturnValue({
      data: { characters: [], totalPages: 0 },
      isFetching: false,
      isError: false,
      error: undefined,
    });
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <Main />
        </Provider>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
 */
