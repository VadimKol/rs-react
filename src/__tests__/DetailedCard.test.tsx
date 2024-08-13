import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';

import { DetailedCard } from '@/components/detailed-card/DetailedCard';
import { makeStore } from '@/store/store';

import { character } from './__mocks__/data';

jest.mock('@/store/rickmortyApi', () => ({
  ...jest.requireActual<object>('@/store/rickmortyApi'),
  useGetCharacterQuery: jest.fn(() => ({ data: character, isFetching: false, isError: false, error: undefined })),
}));

const store = makeStore();

describe('DetailedCard Component', () => {
  it('renders correctly', async () => {
    const { container } = render(
      <Provider store={store}>
        <DetailedCard characterID="1" />
      </Provider>,
    );

    await waitFor(() => expect(container).toMatchSnapshot());
  });
});
