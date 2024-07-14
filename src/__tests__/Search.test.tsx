import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { type RefObject } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Search } from '@/components/search/Search';

const searchField: RefObject<HTMLInputElement> = { current: document.createElement('input') };

if (searchField.current) {
  searchField.current.value = 'Rick';
}

describe('Search Component', () => {
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

  it('checks searchTerm in localStorage', () => {
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

    const buttonSearch = screen.getByTestId('search');

    fireEvent.click(buttonSearch);

    expect('Rick').toBe(localStorage.getItem('R&M_search'));
  });
});
