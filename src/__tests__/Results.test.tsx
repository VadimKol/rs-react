import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { type Character } from 'rickmortyapi';

import { Results } from '@/components/results/Results';

const characters: Character[] = [
  {
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
  },
  {
    id: 2,
    name: 'Morty',
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
  },
];

describe('Results Component', () => {
  it('renders Rick and Morty', () => {
    render(
      <MemoryRouter>
        <Results characters={characters} total={2} page={1} setPage={jest.fn} characterID="1" handleClose={jest.fn} />
      </MemoryRouter>,
    );

    expect(screen.getByText('Rick')).toBeInTheDocument();
    expect(screen.getByText('Morty')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('renders characters not found', () => {
    render(
      <MemoryRouter>
        <Results characters={[]} total={2} page={1} setPage={jest.fn} characterID="1" handleClose={jest.fn} />
      </MemoryRouter>,
    );

    expect(screen.getByText('Characters not found')).toBeInTheDocument();
  });
});
