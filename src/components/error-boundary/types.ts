import { type ReactNode } from 'react';

export interface ErrorProps {
  children?: ReactNode;
}

export interface ErrorState {
  hasError: boolean;
  error?: Error;
}
