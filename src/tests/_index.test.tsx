import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import Page from '@/app//routes/_index';
import { store } from '@/store/store';

import { characters } from './mocks/data';

global.URL.createObjectURL = vi.fn();
global.URL.revokeObjectURL = vi.fn();

const navigate = vi.fn((arg: string): string => arg);

describe('Root route', () => {
  it('renders correctly', () => {
    vi.mock('@remix-run/react', async (importOriginal) => {
      const actual = await importOriginal<object>();
      return {
        ...actual,
        useSearchParams: vi.fn(() => [new URLSearchParams('')]),
        useLoaderData: vi.fn(() => ({ characters, total: 1 })),
        useLocation: vi.fn(() => ({ pathname: '' })),
        useNavigate: vi.fn(() => navigate),
        useNavigation: vi.fn(() => ({ state: 'idle' })),
        Link: vi.fn(({ children }) => <div>{children}</div>),
      };
    });

    const { container } = render(
      <Provider store={store}>
        <Page />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
