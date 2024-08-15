import { render } from '@testing-library/react';

import { Header } from '@/components/header/Header';

describe('Header Component', () => {
  it('renders correctly', () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
