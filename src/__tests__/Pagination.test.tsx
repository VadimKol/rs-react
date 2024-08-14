import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Pagination } from '@/components/pagination/Pagination';

import { mockRouterPush } from './setupAfterEnv';

describe('Pagination Component', () => {
  const user = userEvent.setup();

  it('renders correctly', () => {
    const { container } = render(<Pagination total={2} handleClose={jest.fn} />);

    expect(container).toMatchSnapshot();
  });

  it('should change page query params', async () => {
    render(<Pagination total={3} handleClose={jest.fn} />);

    const buttonRight = screen.getByRole('button', { name: 'Right' });

    await user.click(buttonRight);

    expect(mockRouterPush).toHaveBeenCalledWith(`/?page=2&search=`);
  });
});
