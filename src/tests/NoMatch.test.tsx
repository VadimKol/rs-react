import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { NoMatch } from '@/components/no-match/NoMatch';

const navigate = vi.fn((arg: string): string => arg);

describe('NoMatch or 404 page', () => {
  const user = userEvent.setup();

  it('renders correctly', () => {
    vi.mock('@remix-run/react', () => ({ useNavigate: vi.fn(() => navigate) }));

    const { container } = render(<NoMatch />);

    expect(container).toMatchSnapshot();
  });

  it('navigating to Home when click on button', async () => {
    vi.mock('@remix-run/react', () => ({ useNavigate: vi.fn(() => navigate) }));

    render(<NoMatch />);

    const button = screen.getByRole('button');

    await user.click(button);

    expect(navigate).toHaveBeenCalledWith(`/`);
  });
});
