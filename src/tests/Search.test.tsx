import { createRemixStub } from '@remix-run/testing';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { type ReactNode } from 'react';

import { Search } from '@/components/search/Search';

const navigate = vi.fn((arg: string): string => arg);

describe('Search Component', () => {
  const user = userEvent.setup();

  it('renders correctly', () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: (): ReactNode => <Search loader={false} />,
      },
    ]);

    const { container } = render(<RemixStub />);

    expect(container).toMatchSnapshot();
  });

  it('checks search value in URL', async () => {
    vi.mock('@remix-run/react', () => ({
      useSearchParams: vi.fn(() => [new URLSearchParams('')]),
      useNavigate: vi.fn(() => navigate),
    }));

    render(<Search loader={false} />);

    const buttonSearch = screen.getByRole('button', { name: 'Search-button' });
    const inputSearch = screen.getByPlaceholderText('Search...');

    await user.type(inputSearch, 'Rick');
    await user.click(buttonSearch);

    expect(navigate).toHaveBeenCalledWith(`/?page=1&search=Rick`);
  });
});
