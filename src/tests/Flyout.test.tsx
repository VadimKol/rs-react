import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { Flyout } from '@/components/flyout/Flyout';
import { store } from '@/store/store';

import { characters } from './mocks/data';

global.URL.createObjectURL = vi.fn();
global.URL.revokeObjectURL = vi.fn();

describe('Flyout component', () => {
  it('renders correctly', () => {
    vi.mock('@/store/favoritesSlice', async (importOriginal) => {
      const actual = await importOriginal<object>();
      return {
        ...actual,
        useFavorites: vi.fn(() => characters),
      };
    });

    const { container } = render(
      <Provider store={store}>
        <Flyout />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
