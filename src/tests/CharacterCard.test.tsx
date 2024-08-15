import { createRemixStub } from '@remix-run/testing';
import { render } from '@testing-library/react';
import { type ReactNode } from 'react';
import { Provider } from 'react-redux';

import { CharacterCard } from '@/components/character-card/CharacterCard';
import { store } from '@/store/store';

import { character } from './mocks/data';

describe('CharacterCard Component', () => {
  it('renders correctly', () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: (): ReactNode => (
          <Provider store={store}>
            <CharacterCard character={character} />
          </Provider>
        ),
      },
    ]);

    const { container } = render(<RemixStub />);

    expect(container).toMatchSnapshot();
  });
});
