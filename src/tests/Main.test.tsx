import { createRemixStub } from '@remix-run/testing';
import { render } from '@testing-library/react';
import { type ReactNode } from 'react';
import { Provider } from 'react-redux';

import { Main } from '@/components/main/Main';
import { store } from '@/store/store';

import { characters } from './mocks/data';

global.URL.createObjectURL = vi.fn();
global.URL.revokeObjectURL = vi.fn();

describe('Main page', () => {
  it('renders correctly', () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: (): ReactNode => (
          <Provider store={store}>
            <Main charactersData={{ characters, total: 1 }} />
          </Provider>
        ),
      },
    ]);

    const { container } = render(<RemixStub />);

    expect(container).toMatchSnapshot();
  });
});
