import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Pagination } from '@/components/pagination/Pagination';

let mockSearchParam = new URLSearchParams('');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual<object>('react-router-dom'),
  useSearchParams: (): [URLSearchParams, (newParams: URLSearchParams) => void] => {
    const [params, setParams] = useState(mockSearchParam);
    return [
      params,
      (newParams: URLSearchParams): void => {
        mockSearchParam = newParams;
        setParams(newParams);
      },
    ];
  },
}));

describe('Pagination Component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Pagination page={1} total={2} setPage={jest.fn} setLoader={jest.fn} handleClose={jest.fn} />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should change page query params', () => {
    render(
      <MemoryRouter>
        <Pagination page={2} total={3} setPage={jest.fn} setLoader={jest.fn} handleClose={jest.fn} />
      </MemoryRouter>,
    );

    const buttonRight = screen.getByTestId('right');
    const buttonLeft = screen.getByTestId('left');

    fireEvent.click(buttonRight);
    expect(mockSearchParam).toEqual({ page: '3' });
    fireEvent.click(buttonLeft);
    expect(mockSearchParam).toEqual({ page: '1' });
  });
});
