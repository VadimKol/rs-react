import { render, screen, waitFor } from '@testing-library/react';
import { type Router } from 'next/router';
import mockRouter from 'next-router-mock';

import Main from '@/pages';
import App from '@/pages/_app';

import { characters } from './__mocks__/data';

global.URL.createObjectURL = jest.fn();
global.URL.revokeObjectURL = jest.fn();

jest.mock('@/store/rickmortyApi', () => ({
  ...jest.requireActual<object>('@/store/rickmortyApi'),
  useGetCharactersQuery: jest.fn(() => ({ data: { characters, totalPages: 1 }, isError: false, error: undefined })),
}));

jest.mock('@/store/favoritesSlice', () => ({
  ...jest.requireActual<object>('@/store/favoritesSlice'),
  useFavorites: jest.fn(() => characters),
}));

describe('App Component', () => {
  it('renders correctly', async () => {
    mockRouter.push('/');
    render(<App Component={() => <Main />} pageProps={{}} router={{} as Router} />);

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Theme switcher' })).toBeInTheDocument();
      expect(screen.getAllByRole('presentation')).toHaveLength(2);
    });
  });
});
