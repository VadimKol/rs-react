import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';

import Main from '@/pages';
import { makeStore } from '@/store/store';

import { characters } from './__mocks__/data';

global.URL.createObjectURL = jest.fn();
global.URL.revokeObjectURL = jest.fn();

jest.mock('@/store/rickmortyApi', () => ({
  ...jest.requireActual<object>('@/store/rickmortyApi'),
  useGetCharactersQuery: jest.fn(() => ({ data: { characters, totalPages: 1 }, isError: false, error: undefined })),
}));

const store = makeStore();

describe('Main page', () => {
  it('renders correctly', async () => {
    const { container } = render(
      <Provider store={store}>
        <Main />
      </Provider>,
    );

    await waitFor(() => expect(container).toMatchSnapshot());
  });
});
