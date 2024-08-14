import { render } from '@testing-library/react';

import Loading from '@/app/loading';

describe('Header Component', () => {
  it('renders correctly', () => {
    const { container } = render(<Loading />);

    expect(container).toMatchSnapshot();
  });
});
