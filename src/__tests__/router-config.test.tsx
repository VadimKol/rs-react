import { render, waitFor } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/router/router-config';

describe('router-config', () => {
  it('renders correctly', async () => {
    const { container } = render(<RouterProvider router={router} />);

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
