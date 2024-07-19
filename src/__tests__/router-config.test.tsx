import { render, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/router/router-config';

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

describe('router-config', () => {
  it('renders correctly', async () => {
    const { container } = render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
