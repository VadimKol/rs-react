import { render } from '@testing-library/react';

import GlobalErrorPage from '@/app/global-error';

describe('Global error page', () => {
  const c = console;
  c.error = jest.fn();

  it('renders correctly', () => {
    const { container } = render(<GlobalErrorPage error={new Error('Some error')} />);

    expect(container).toMatchSnapshot();
  });
});
