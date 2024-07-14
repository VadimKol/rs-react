import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { ErrorPage } from '@/components/error/ErrorPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual<object>('react-router-dom'),
  useRouteError: jest.fn(),
}));

describe('ErrorPage Component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <ErrorPage />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
