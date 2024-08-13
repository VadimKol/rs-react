import { render, waitFor } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { Provider } from 'react-redux';

import WithDetails from '@/pages/character/[id]';
import { makeStore } from '@/store/store';

import { character, characters } from './__mocks__/data';

global.URL.createObjectURL = jest.fn();
global.URL.revokeObjectURL = jest.fn();

jest.mock('@/store/rickmortyApi', () => ({
  ...jest.requireActual<object>('@/store/rickmortyApi'),
  useGetCharactersQuery: jest.fn(() => ({ data: { characters, totalPages: 1 }, isError: false, error: undefined })),
  useGetCharacterQuery: jest.fn(() => ({ data: character, isFetching: false, isError: false, error: undefined })),
}));

const store = makeStore();

describe('Main page with details', () => {
  it('renders correctly', async () => {
    mockRouter.push({ pathname: '/', query: { page: '1', search: 'Rick', id: '1' } });

    const { container } = render(
      <Provider store={store}>
        <WithDetails />
      </Provider>,
    );

    await waitFor(() => expect(container).toMatchSnapshot());
  });
});
