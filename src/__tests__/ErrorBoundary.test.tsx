import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { ErrorBoundary } from '@/components/error-boundary/ErrorBoundary';

describe('ErrorBoundary component', () => {
  it('renders children', () => {
    render(
      <ErrorBoundary>
        <p>Some content</p>
      </ErrorBoundary>,
    );

    expect(screen.getByText('Some content')).toBeInTheDocument();
  });
});
