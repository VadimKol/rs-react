import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Main } from '@/components/main/Main';

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
