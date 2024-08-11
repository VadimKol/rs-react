import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { type RefObject } from 'react';

import { Search } from '@/components/search/Search';

const searchField: RefObject<HTMLInputElement> = { current: document.createElement('input') };

if (searchField.current) {
  searchField.current.value = 'Rick';
}

jest.mock('next/router', () => ({
  ...jest.requireActual<object>('next/router'),
  useRouter: jest.fn().mockImplementation(() => ({ replace: async (): Promise<void> => {} })),
}));

describe('Search Component', () => {
  const user = userEvent.setup();

  afterEach(() => {
    localStorage.removeItem('R&M_search');
  });

  it('renders correctly', () => {
    const { container } = render(
      <Search searchField={searchField} character={{ name: 'Rick' }} setCharacter={jest.fn} loader={false} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('checks searchTerm in localStorage', async () => {
    render(<Search searchField={searchField} character={{ name: 'Rick' }} setCharacter={jest.fn} loader={false} />);

    const buttonSearch = screen.getByRole('button', { name: 'Search-button' });

    await user.click(buttonSearch);

    expect('Rick').toBe(localStorage.getItem('R&M_search'));
  });
});
