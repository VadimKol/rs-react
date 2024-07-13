import { type ReactNode } from 'react';

import styles from './styles.module.scss';

export function Header(): ReactNode {
  return (
    <header className={styles.header}>
      <div className={styles.container} />
    </header>
  );
}
