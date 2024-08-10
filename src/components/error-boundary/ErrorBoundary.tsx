import { Component, type ErrorInfo, type ReactNode } from 'react';

import { ErrorPage } from '@/pages/_error';

import type { ErrorProps, ErrorState } from './types';

export class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(error: Error): ErrorState {
    return { hasError: true, error };
  }

  public componentDidCatch(_: Error, info: ErrorInfo): void {
    const c = console;
    c.error(info);
  }

  public render(): ReactNode {
    const { hasError, error } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorPage error={error || new Error('Something went wrong')} /> : children;
  }
}
