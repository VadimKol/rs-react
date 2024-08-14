import { render } from '@testing-library/react';

import { Main } from '@/components/main/Main';
import { StoreProvider } from '@/store/StoreProvider';

import { characters } from './__mocks__/data';

global.URL.createObjectURL = jest.fn();
global.URL.revokeObjectURL = jest.fn();

describe('Main page', () => {
  it('renders correctly', () => {
    const { container } = render(
      <StoreProvider>
        <Main charactersData={{ characters, total: 1 }} />
      </StoreProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
