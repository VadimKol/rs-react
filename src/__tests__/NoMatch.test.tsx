import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { NoMatch } from '@/components/no-match/NoMatch';

describe('NoMatch Component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <NoMatch />
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
