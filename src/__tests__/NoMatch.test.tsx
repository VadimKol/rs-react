import { render } from '@testing-library/react';

import NoMatch from '@/pages/404';

jest.mock('next/router', () => ({
  ...jest.requireActual<object>('next/router'),
  useRouter: jest.fn().mockImplementation(() => ({ replace: async (): Promise<void> => {} })),
}));

describe('NoMatch Component', () => {
  it('renders correctly', () => {
    const { container } = render(<NoMatch />);

    expect(container).toMatchSnapshot();
  });
});
