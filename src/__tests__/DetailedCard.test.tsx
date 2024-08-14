import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DetailedCard } from '@/components/detailed-card/DetailedCard';
import { StoreProvider } from '@/store/StoreProvider';

import { character } from './__mocks__/data';
import { mockRouterPush } from './setupAfterEnv';

describe('DetailedCard Component', () => {
  const user = userEvent.setup();

  it('renders correctly', () => {
    const { container } = render(
      <StoreProvider>
        <DetailedCard character={character} />
      </StoreProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('changes URL when click on Close button', async () => {
    render(
      <StoreProvider>
        <DetailedCard character={character} />
      </StoreProvider>,
    );

    const buttonSearch = screen.getByText('Close');

    await user.click(buttonSearch);

    expect(mockRouterPush).toHaveBeenCalledWith(`/?page=1&search=`);
  });

  it('did not render when person is not specified', () => {
    const { container } = render(
      <StoreProvider>
        <DetailedCard character={null} />
      </StoreProvider>,
    );

    expect(container).toBeEmptyDOMElement();
  });
});
