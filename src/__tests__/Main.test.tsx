import { render, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { Main } from '@/components/main/Main';

global.URLSearchParams = jest.fn().mockImplementation(() => ({
  get: jest.fn(() => 'mockedValue'),
}));

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

describe('Main Component', () => {
  it('renders correctly', async () => {
    const { container } = render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
