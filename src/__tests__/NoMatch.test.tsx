import { render } from '@testing-library/react';

import NoMatch from '@/pages/404';

describe('NoMatch or 404 page', () => {
  it('renders correctly', () => {
    const { container } = render(<NoMatch />);

    expect(container).toMatchSnapshot();
  });
});
