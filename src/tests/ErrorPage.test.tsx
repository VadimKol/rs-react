import { render } from '@testing-library/react';

import { ErrorPage } from '@/components/error/ErrorPage';

describe('Error page', () => {
  it('renders correctly', () => {
    const { container } = render(<ErrorPage error={new Error('Some error')} />);

    expect(container).toMatchSnapshot();
  });
});
