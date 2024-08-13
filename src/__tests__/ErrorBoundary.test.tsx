import { render, screen } from '@testing-library/react';

import { ErrorBoundary } from '@/components/error-boundary/ErrorBoundary';

describe('ErrorBoundary component', () => {
  const c = console;
  c.error = jest.fn();

  it('renders children', () => {
    render(
      <ErrorBoundary>
        <p>Some content</p>
      </ErrorBoundary>,
    );

    expect(screen.getByText('Some content')).toBeInTheDocument();
  });

  it('renders an error message', () => {
    const Throw = (): never => {
      throw new Error('Error');
    };

    render(
      <ErrorBoundary>
        <Throw />
      </ErrorBoundary>,
    );
    expect(screen.getByText('Please refresh the page')).toBeInTheDocument();
  });
});
