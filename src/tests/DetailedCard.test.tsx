import { createRemixStub } from '@remix-run/testing';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { type ReactNode } from 'react';
import { Provider } from 'react-redux';

import { DetailedCard } from '@/components/detailed-card/DetailedCard';
import { store } from '@/store/store';

import { character } from './mocks/data';

const navigate = vi.fn((arg: string): string => arg);

describe('DetailedCard Component', () => {
  const user = userEvent.setup();

  it('renders correctly', () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: (): ReactNode => (
          <Provider store={store}>
            <DetailedCard character={character} />
          </Provider>
        ),
      },
    ]);

    const { container } = render(<RemixStub />);

    expect(container).toMatchSnapshot();
  });

  it('changes URL when click on Close button', async () => {
    vi.mock('@remix-run/react', () => ({
      useSearchParams: vi.fn(() => [new URLSearchParams('')]),
      useNavigate: vi.fn(() => navigate),
    }));

    render(
      <Provider store={store}>
        <DetailedCard character={character} />
      </Provider>,
    );

    const buttonSearch = screen.getByText('Close');

    await user.click(buttonSearch);

    expect(navigate).toHaveBeenCalledWith(`/?page=1&search=`);
  });

  it('did not render when person is not specified', () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: (): ReactNode => (
          <Provider store={store}>
            <DetailedCard character={null} />
          </Provider>
        ),
      },
    ]);

    const { container } = render(<RemixStub />);

    expect(container).toBeEmptyDOMElement();
  });
});
