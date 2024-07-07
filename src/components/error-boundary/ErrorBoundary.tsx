import { Component, type ErrorInfo, type ReactNode } from 'react';

import error_img from '@/assets/images/loader.png';

import styles from './styles.module.scss';
import type { ErrorProps, ErrorState } from './types';

export class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { hasError: false, error: null };
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
    if (hasError) {
      return (
        <div className={styles.error}>
          <p className={styles.name}>{error?.name}</p>
          <img className={styles.error_img} src={error_img} alt="Rick and Morty error" width={500} height={500} />
          <p className={styles.desc}>{error?.message}</p>
          <p className={styles.desc}>Please refresh the page</p>
        </div>
      );
    }

    const { children } = this.props;

    return children;
  }
}
