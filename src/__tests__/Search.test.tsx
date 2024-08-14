import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Search } from '@/components/search/Search';

import { mockRouterPush } from './setupAfterEnv';

describe('Search Component', () => {
  const user = userEvent.setup();

  it('renders correctly', () => {
    const { container } = render(<Search loader={false} />);

    expect(container).toMatchSnapshot();
  });

  it('checks search value in URL', async () => {
    render(<Search loader={false} />);

    const buttonSearch = screen.getByRole('button', { name: 'Search-button' });
    const inputSearch = screen.getByPlaceholderText('Search...');

    await user.type(inputSearch, 'Rick');
    await user.click(buttonSearch);

    expect(mockRouterPush).toHaveBeenCalledWith(`/?page=1&search=Rick`);
  });
});
