import { Component, type ErrorInfo, type ReactNode } from 'react';

import { ErrorPage } from '../error/ErrorPage';
import type { ErrorProps, ErrorState } from './types';

export class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): ErrorState {
    return { hasError: true };
  }

  public componentDidCatch(_: Error, info: ErrorInfo): void {
    const c = console;
    c.error(info);
  }

  public render(): ReactNode {
    const { hasError } = this.state;
    if (hasError) {
      return <ErrorPage />;
    }

    const { children } = this.props;

    return children;
  }
}
