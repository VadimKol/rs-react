import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';

import { CharacterCard } from '@/components/character-card/CharacterCard';
import { makeStore } from '@/store/store';

import { character } from './__mocks__/data';

const store = makeStore();

describe('CharacterCard Component', () => {
  it('renders correctly', async () => {
    const { container } = render(
      <Provider store={store}>
        <CharacterCard character={character} />
      </Provider>,
    );

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
