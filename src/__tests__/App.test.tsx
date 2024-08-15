/* import { render, screen } from '@testing-library/react';
import { type ReactNode } from 'react';
import { createMemoryRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { App } from '@/App';

jest.mock('@/components/header/Header.tsx', () => ({
  Header: (): ReactNode => <div data-testid="header">Header</div>,
}));

jest.mock('@/components/footer/Footer.tsx', () => ({
  Footer: (): ReactNode => <div data-testid="footer">Footer</div>,
}));

describe('App Component', () => {
  it('renders correctly', () => {
    const routerConfig = createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/" element={<div data-testid="outlet">Main Content</div>} />
      </Route>,
    );

    const router = createMemoryRouter(routerConfig, {
      initialEntries: ['/'],
    });

    render(<RouterProvider router={router} />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('outlet')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
 */
