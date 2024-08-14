import { render } from '@testing-library/react';

import { CharacterCard } from '@/components/character-card/CharacterCard';
import { StoreProvider } from '@/store/StoreProvider';

import { character } from './__mocks__/data';

describe('CharacterCard Component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <StoreProvider>
        <CharacterCard character={character} />
      </StoreProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
