import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { type RefObject } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Search } from '@/components/search/Search';

const searchField: RefObject<HTMLInputElement> = { current: document.createElement('input') };

if (searchField.current) {
  searchField.current.value = 'Rick';
}

describe('Search Component', () => {
  const user = userEvent.setup();

  afterEach(() => {
    localStorage.removeItem('R&M_search');
  });

  it('renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Search
          searchField={searchField}
          character={{ name: 'Rick' }}
          setCharacter={jest.fn}
          setPage={jest.fn}
          setLoader={jest.fn}
          loader={false}
        />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  it('checks searchTerm in localStorage', async () => {
    render(
      <MemoryRouter>
        <Search
          searchField={searchField}
          character={{ name: 'Rick' }}
          setCharacter={jest.fn}
          setPage={jest.fn}
          setLoader={jest.fn}
          loader={false}
        />
      </MemoryRouter>,
    );

    const buttonSearch = screen.getByRole('button', { name: 'Search-button' });

    await user.click(buttonSearch);

    expect('Rick').toBe(localStorage.getItem('R&M_search'));
  });
});
