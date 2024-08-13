import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';

import { Pagination } from '@/components/pagination/Pagination';

describe('Pagination Component', () => {
  const user = userEvent.setup();

  it('renders correctly', () => {
    const { container } = render(<Pagination total={2} handleClose={jest.fn} />);

    expect(container).toMatchSnapshot();
  });

  it('should change page query params', async () => {
    mockRouter.push({ pathname: '/', query: { page: '2', search: 'Rick' } });

    render(<Pagination total={3} handleClose={jest.fn} />);

    const buttonRight = screen.getByRole('button', { name: 'Right' });
    const buttonLeft = screen.getByRole('button', { name: 'Left' });

    await user.click(buttonRight);
    expect(mockRouter).toMatchObject({ pathname: '/', query: { page: '3', search: 'Rick' } });
    await user.click(buttonLeft);
    expect(mockRouter).toMatchObject({ pathname: '/', query: { page: '2', search: 'Rick' } });
  });
});
