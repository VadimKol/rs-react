import { Component, type ErrorInfo, type ReactNode } from 'react';

import styles from './styles.module.scss';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(_: unknown, info: ErrorInfo): void {
    const c = console;
    c.error(info);
  }

  public render(): ReactNode {
    const { hasError, error } = this.state;
    if (hasError) {
      return (
        <div className={styles.error}>
          <p className={styles.name}>{error?.name}</p>
          <div className={styles.error_img} />
          <p className={styles.desc}>{error?.message}</p>
          <p className={styles.desc}>Please refresh the page</p>
        </div>
      );
    }

    const { children } = this.props;

    return children;
  }
}
