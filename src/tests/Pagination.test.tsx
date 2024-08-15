import { createRemixStub } from '@remix-run/testing';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { type ReactNode } from 'react';

import { Pagination } from '@/components/pagination/Pagination';

const navigate = vi.fn((arg: string): string => arg);

describe('Pagination Component', () => {
  const user = userEvent.setup();

  it('renders correctly', () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: (): ReactNode => <Pagination total={2} handleClose={vi.fn()} />,
      },
    ]);

    const { container } = render(<RemixStub />);

    expect(container).toMatchSnapshot();
  });

  it('should change page query params when click on Right button', async () => {
    vi.mock('@remix-run/react', () => ({
      useSearchParams: vi.fn(() => [new URLSearchParams('')]),
      useNavigate: vi.fn(() => navigate),
    }));

    render(<Pagination total={3} handleClose={vi.fn()} />);

    const buttonRight = screen.getByRole('button', { name: 'Right' });

    await user.click(buttonRight);

    expect(navigate).toHaveBeenCalledWith(`/?page=2&search=`);
  });
});
