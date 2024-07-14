import { render, waitFor } from '@testing-library/react';
import { MemoryRouter, useOutletContext } from 'react-router-dom';

import { DetailedCard } from '@/components/detailed-card/DetailedCard';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual<object>('react-router-dom'),
  useOutletContext: jest.fn(),
}));

const mockUseOutletContext = useOutletContext as jest.Mock;

describe('DetailedCard Component', () => {
  it('renders correctly', async () => {
    mockUseOutletContext.mockReturnValue({ characterID: '1', setNoMatch: () => {} });

    const { container } = render(
      <MemoryRouter>
        <DetailedCard />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
