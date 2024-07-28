import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { type Character } from 'rickmortyapi';

import { CharacterCard } from '@/components/character-card/CharacterCard';
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

describe('CharacterCard Component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Provider store={store}>
          <CharacterCard character={character} />
        </Provider>
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
