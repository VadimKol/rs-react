import { render } from '@testing-library/react';

import ErrorPage from '@/pages/_error';

describe('ErrorPage Component', () => {
  it('renders correctly', () => {
    const { container } = render(<ErrorPage error={new Error('Some error')} />);

    expect(container).toMatchSnapshot();
  });
});
